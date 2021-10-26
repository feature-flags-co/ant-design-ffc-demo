import {
  AlipayCircleOutlined,
  LockOutlined,
  MobileOutlined,
  TaobaoCircleOutlined,
  UserOutlined,
  WeiboCircleOutlined,
} from '@ant-design/icons';
import { Alert, message, Tabs } from 'antd';
import React, { useState } from 'react';
import {
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormText,
  LoginForm,
  ProFormSelect,
} from '@ant-design/pro-form';
import { useIntl, history, FormattedMessage, SelectLang, useModel } from 'umi';
import Footer from '@/components/Footer';
import { login } from '@/services/ant-design-pro/api';
import { getFakeCaptcha } from '@/services/ant-design-pro/login';
import styles from './index.less';
import { FFCJsClient } from 'ffc-js-client-sdk/esm';

const LoginMessage = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const Login = () => {
  const [userLoginState, setUserLoginState] = useState({});
  const [type, setType] = useState('mobile');
  const { initialState, setInitialState } = useModel('@@initialState');
  const intl = useIntl();

  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();

    if (userInfo) {
      await setInitialState((s) => ({ ...s, currentUser: userInfo }));
    }
  };

  const handleSubmit = async (values) => {
    let userInfo = {
      userName: values.user.label.split('|')[0].trim(),
      key: values.user.label.split('|')[1].trim(),
      customizeProperties: [
        {
          name: '手机号',
          value: values.user.label.split('|')[1].trim(),
        },
        {
          name: '城市',
          value: values.user.label.split('|')[2].trim(),
        },
        {
          name: '区县',
          value: values.user.label.split('|')[3].trim(),
        },
        {
          name: '性别',
          value: values.user.label.split('|')[4].trim(),
        },
        {
          name: '年龄',
          value: values.user.label.split('|')[5].trim(),
        },
      ],
    };

    let envkey = localStorage.getItem('envkey');
    FFCJsClient.initialize(envkey, userInfo);
    localStorage.setItem('ffc-user-info', JSON.stringify(userInfo));
    // console.log('获客多init started');
    // Hokdo.init('e7e79f2de9399f5128028a3546272855', {
    //   userInfo: {
    //     name: ffcUserInfo.userName,
    //   }
    // })
    // console.log('获客多init done');

    try {
      // 登录
      const msg = await login({ ...values, type });

      console.log(msg);
      if (msg.status === 'ok') {
        const defaultLoginSuccessMessage = intl.formatMessage({
          id: 'pages.login.success',
          defaultMessage: '登录成功！',
        });
        message.success(defaultLoginSuccessMessage);
        await fetchUserInfo();
        /** 此方法会跳转到 redirect 参数所在的位置 */

        if (!history) return;
        const { query } = history.location;
        const { redirect } = query;
        history.push(redirect || '/');
        return;
      }

      console.log(msg); // 如果失败去设置用户错误信息

      setUserLoginState(msg);
    } catch (error) {
      const defaultLoginFailureMessage = intl.formatMessage({
        id: 'pages.login.failure',
        defaultMessage: '登录失败，请重试！',
      });
      message.error(defaultLoginFailureMessage);
    }
  };

  const { status, type: loginType } = userLoginState;
  return (
    <div className={styles.container}>
      <div className={styles.lang} data-lang>
        {SelectLang && <SelectLang />}
      </div>
      <div className={styles.content}>
        <LoginForm
          logo={<img alt="logo" src="/logo.svg" />}
          title="Ant Design"
          subTitle={intl.formatMessage({
            id: 'pages.layouts.userLayout.title',
          })}
          initialValues={{
            autoLogin: true,
          }}
          actions={[
            <FormattedMessage
              key="loginWith"
              id="pages.login.loginWith"
              defaultMessage="其他登录方式"
            />,
            <AlipayCircleOutlined key="AlipayCircleOutlined" className={styles.icon} />,
            <TaobaoCircleOutlined key="TaobaoCircleOutlined" className={styles.icon} />,
            <WeiboCircleOutlined key="WeiboCircleOutlined" className={styles.icon} />,
          ]}
          onFinish={async (values) => {
            await handleSubmit(values);
          }}
        >
          <Tabs activeKey={type} onChange={setType}>
            {/* <Tabs.TabPane
              key="account"
              tab={intl.formatMessage({
                id: 'pages.login.accountLogin.tab',
                defaultMessage: '账户密码登录',
              })}
            /> */}
            <Tabs.TabPane
              key="mobile"
              tab={intl.formatMessage({
                id: 'pages.login.phoneLogin.tab',
                defaultMessage: '手机号登录',
              })}
            />
          </Tabs>

          {status === 'error' && loginType === 'account' && (
            <LoginMessage
              content={intl.formatMessage({
                id: 'pages.login.accountLogin.errorMessage',
                defaultMessage: '账户或密码错误(admin/ant.design)',
              })}
            />
          )}
          {type === 'account' && (
            <>
              <ProFormText
                name="username"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={styles.prefixIcon} />,
                }}
                placeholder={intl.formatMessage({
                  id: 'pages.login.username.placeholder',
                  defaultMessage: '用户名: admin or user',
                })}
                rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage
                        id="pages.login.username.required"
                        defaultMessage="请输入用户名!"
                      />
                    ),
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon} />,
                }}
                placeholder={intl.formatMessage({
                  id: 'pages.login.password.placeholder',
                  defaultMessage: '密码: ant.design',
                })}
                rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage
                        id="pages.login.password.required"
                        defaultMessage="请输入密码！"
                      />
                    ),
                  },
                ]}
              />
            </>
          )}

          {status === 'error' && loginType === 'mobile' && <LoginMessage content="验证码错误" />}
          {type === 'mobile' && (
            <>
              <ProFormSelect
                rules={[
                  {
                    required: true,
                    message: '请选择一个用户',
                  },
                ]}
                // width="sm"
                fieldProps={{
                  labelInValue: true,
                }}
                name="user"
                className={styles.item}
                request={async () => {
                  let returnValues = [
                    {
                      label: '张开云 | 13255511252 | 北京 | 顺义 | 男 | 31岁',
                      value: '张开云',
                    },
                    {
                      label: '王卿云 | 13255532563 | 北京 | 平谷 | 女 | 56岁',
                      value: '王卿云',
                    },
                    {
                      label: '梁开元 | 13252212552 | 北京 | 密云 | 男 | 25岁',
                      value: '梁开元',
                    },
                    {
                      label: '董卿 | 13755512352 | 北京 | 怀柔 | 女 | 43岁',
                      value: '董卿',
                    },
                    {
                      label: '朱芳雨 | 13995512367 | 北京 | 石景山 | 男 | 23岁',
                      value: '朱芳雨',
                    },
                    {
                      label: '陈浩南 | 13255889753 | 北京 | 昌平 | 男 | 32岁',
                      value: '陈浩南',
                    },
                    {
                      label: '吴亦凡 | 13255513215 | 北京 | 丰台 | 女 | 27岁',
                      value: '吴亦凡',
                    },
                    {
                      label: '郭艾伦 | 13253516480 | 北京 | 朝阳 | 男 | 27岁',
                      value: '郭艾伦',
                    },
                    {
                      label: '山鸡 | 13267512358 | 北京 | 宣武 | 男 | 27岁',
                      value: '山鸡',
                    },
                    {
                      label: '大空翼 | 13276512756 | 北京 | 崇文 | 男 | 27岁',
                      value: '大空翼',
                    },
                    {
                      label: '吴孟达 | 132875512612 | 北京 | 东城 | 男 | 27岁',
                      value: '吴孟达',
                    },
                    {
                      label: '周星驰 | 18855512452 | 北京 | 西城 | 男 | 27岁',
                      value: '周星驰',
                    },
                    {
                      label: '史泰龙 | 18055518890 | 北京 | 海淀 | 男 | 27岁',
                      value: '史泰龙',
                    },
                    {
                      label: '小泽 | 13225511234 | 北京 | 海淀 | 女 | 22岁',
                      value: '小泽',
                    },
                    {
                      label: '玛利亚 | 13233512455 | 北京 | 朝阳 | 女 | 23岁',
                      value: '玛利亚',
                    },
                  ];
                  return returnValues;
                }}
              ></ProFormSelect>
            </>
          )}
          <div
            style={{
              marginBottom: 24,
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              <FormattedMessage id="pages.login.rememberMe" defaultMessage="自动登录" />
            </ProFormCheckbox>
            {/* <a
              style={{
                float: 'right',
              }}
            >
              <FormattedMessage id="pages.login.forgotPassword" defaultMessage="忘记密码" />
            </a> */}
          </div>
        </LoginForm>
      </div>
      <Footer />
    </div>
  );
};

export default Login;

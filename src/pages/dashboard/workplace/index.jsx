import { Avatar, Card, Col, List, Skeleton, Row, Statistic, Result, Button } from 'antd';
import { Radar } from '@ant-design/charts';
import { Link, useRequest } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import moment from 'moment';
import EditableLinkGroup from './components/EditableLinkGroup';
import styles from './style.less';
import { queryProjectNotice, queryActivities, fakeChartData } from './service';

const links = [
  {
    title: '操作一',
    href: '',
  },
  {
    title: '操作二',
    href: '',
  },
  {
    title: '操作三',
    href: '',
  },
  {
    title: '操作四',
    href: '',
  },
  {
    title: '操作五',
    href: '',
  },
  {
    title: '操作六',
    href: '',
  },
];

const PageHeaderContent = ({ currentUser }) => {
  const loading = currentUser && Object.keys(currentUser).length;

  if (!loading) {
    return (
      <Skeleton
        avatar
        paragraph={{
          rows: 1,
        }}
        active
      />
    );
  }

  return (
    <div className={styles.pageHeaderContent}>
      <div className={styles.avatar}>
        <Avatar size="large" src={currentUser.avatar} />
      </div>
      <div className={styles.content}>
        <div className={styles.contentTitle}>
          早安，
          {currentUser.name}
          ，祝你开心每一天！
        </div>
        <div>
          {currentUser.title} |{currentUser.group}
        </div>
      </div>
    </div>
  );
};

const ExtraContent = () => (
  <div className={styles.extraContent}>
    <div className={styles.statItem}>
      <Statistic title="项目数" value={56} />
    </div>
    <div className={styles.statItem}>
      <Statistic title="团队内排名" value={8} suffix="/ 24" />
    </div>
    <div className={styles.statItem}>
      <Statistic title="项目访问" value={2223} />
    </div>
  </div>
);

const Workplace = () => {
  const { loading: projectLoading, data: projectNotice = [] } = useRequest(queryProjectNotice);
  const { loading: activitiesLoading, data: activities = [] } = useRequest(queryActivities);
  const { data } = useRequest(fakeChartData);

  const renderActivities = (item) => {
    const events = item.template.split(/@\{([^{}]*)\}/gi).map((key) => {
      if (item[key]) {
        return (
          <a href={item[key].link} key={item[key].name}>
            {item[key].name}
          </a>
        );
      }

      return key;
    });
    return (
      <List.Item key={item.id}>
        <List.Item.Meta
          avatar={<Avatar src={item.user.avatar} />}
          title={
            <span>
              <a className={styles.username}>{item.user.name}</a>
              &nbsp;
              <span className={styles.event}>{events}</span>
            </span>
          }
          description={
            <span className={styles.datetime} title={item.updatedAt}>
              {moment(item.updatedAt).fromNow()}
            </span>
          }
        />
      </List.Item>
    );
  };
  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  const dosimulation = async () => {
    alert(Date.now());
    let startUserName = 16712522224;
    for (let i = 0; i < 1000; i++) {
      startUserName = startUserName + 1;
      window.FFCJsClient.initialize(
        'OTNlLTYyM2UtNCUyMDIxMTAxOTA4NDYxMF9fMl9fM19fMjM0X19kZWZhdWx0XzRhMjE1',
        {
          userName: '' + startUserName,
          key: '' + startUserName,
          customizeProperties: [
            {
              name: '手机号',
              value: '' + startUserName,
            },
          ],
        },
      );
      console.log('FFCJsClient.initialize');
      await sleep(1000);
      console.log('FFCJsClient.variation');
      let variationResult = FFCJsClient.variation('进行中项目---超链接位置');
      await sleep(1000);
      console.log('FFCJsClient.track');
      window.FFCJsClient.track([
        {
          secret: 'OTNlLTYyM2UtNCUyMDIxMTAxOTA4NDYxMF9fMl9fM19fMjM0X19kZWZhdWx0XzRhMjE1',
          route: 'http://localhost:8000/form/step-form',
          appType: 'Javascript',
          eventName: 'pageview',
          user: {
            fFUserName: '' + startUserName,
            fFUserEmail: '',
            fFUserCountry: '',
            fFUserKeyId: '' + startUserName,
            fFUserCustomizedProperties: [
              {
                name: '手机号',
                value: '' + startUserName,
              },
            ],
          },
        },
      ]);
      window.FFCJsClient.track([
        {
          secret: 'OTNlLTYyM2UtNCUyMDIxMTAxOTA4NDYxMF9fMl9fM19fMjM0X19kZWZhdWx0XzRhMjE1',
          route: 'http://localhost:8000/form/step-form',
          appType: 'Javascript',
          type: 'Click',
          eventName: 'click',
          user: {
            fFUserName: '' + startUserName,
            fFUserEmail: '',
            fFUserCountry: '',
            fFUserKeyId: '' + startUserName,
            fFUserCustomizedProperties: [
              {
                name: '手机号',
                value: '' + startUserName,
              },
            ],
          },
        },
      ]);

      // if (variationResult === '超链接包裹卡片版（新版）') {
      //   FFCJsClient.track([{
      //     "secret": "OTNlLTYyM2UtNCUyMDIxMTAxOTA4NDYxMF9fMl9fM19fMjM0X19kZWZhdWx0XzRhMjE1",
      //     "route": "http://localhost:8000/form/step-form",
      //     "numericValue": 1,
      //     "timeStamp": Date.now(),
      //     "appType": "Javascript",
      //     "user": {
      //       "userName": "16672512224",
      //       "email": "",
      //       "country": "",
      //       "key": "16672512224",
      //       "customizeProperties": [
      //         {
      //           "name": "手机号",
      //           "value": "16672512224"
      //         }
      //       ]
      //     },
      //     "eventName": "pageview"
      //   }])
      // }
      // else if(variationResult === '超链接在卡片最底部左侧的文字上（旧版）'){

      // }
    }
  };

  return (
    <PageContainer
      content={
        <PageHeaderContent
          currentUser={{
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
            name: '吴彦祖',
            userid: '00000001',
            email: 'antdesign@alipay.com',
            signature: '海纳百川，有容乃大',
            title: '交互专家',
            group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
          }}
        />
      }
      extraContent={<ExtraContent />}
    >
      <Row>
        <Button onClick={dosimulation}>asdf</Button>
      </Row>
      <Row gutter={24}>
        <Col xl={16} lg={24} md={24} sm={24} xs={24}>
          {FFCJsClient.variation('进行中项目---超链接位置') ==
          '超链接在卡片最底部左侧的文字上（旧版）' ? (
            <Card
              className={styles.projectList}
              style={{
                marginBottom: 24,
              }}
              title="进行中的项目"
              bordered={false}
              extra={<Link to="/">全部项目</Link>}
              loading={projectLoading}
              bodyStyle={{
                padding: 0,
              }}
            >
              {projectNotice.map((item) => (
                <Card.Grid className={styles.projectGrid} key={item.id}>
                  <Card
                    bodyStyle={{
                      padding: 0,
                    }}
                    bordered={false}
                  >
                    <Card.Meta
                      title={
                        <div className={styles.cardTitle}>
                          <Avatar size="small" src={item.logo} />
                          <Link to={item.href}>{item.title}</Link>
                        </div>
                      }
                      description={item.description}
                    />
                    <div className={styles.projectItemContent}>
                      <Link to={item.memberLink}>{item.member || ''}</Link>
                      {item.updatedAt && (
                        <span className={styles.datetime} title={item.updatedAt}>
                          {moment(item.updatedAt).fromNow()}
                        </span>
                      )}
                    </div>
                  </Card>
                </Card.Grid>
              ))}
            </Card>
          ) : (
            <Card
              className={styles.projectList}
              style={{
                marginBottom: 24,
              }}
              title="进行中的项目"
              bordered={false}
              extra={<Link to="/">全部项目</Link>}
              loading={projectLoading}
              bodyStyle={{
                padding: 0,
              }}
            >
              {projectNotice.map((item) => (
                <Card.Grid className={styles.projectGrid} key={item.id}>
                  <Link to="/form/step-form">
                    <Card
                      bodyStyle={{
                        padding: 0,
                      }}
                      bordered={false}
                    >
                      <Card.Meta
                        title={
                          <div className={styles.cardTitle}>
                            <Avatar size="small" src={item.logo} />
                            <Link to={item.href}>{item.title}</Link>
                          </div>
                        }
                        description={item.description}
                      />
                      <div className={styles.projectItemContent}>
                        <Link to={item.memberLink}>{item.member || ''}</Link>
                        {item.updatedAt && (
                          <span className={styles.datetime} title={item.updatedAt}>
                            {moment(item.updatedAt).fromNow()}
                          </span>
                        )}
                      </div>
                    </Card>
                  </Link>
                </Card.Grid>
              ))}
            </Card>
          )}
          <Card
            className={styles.projectList}
            style={{
              marginBottom: 24,
            }}
            title="被挂起的项目"
            bordered={false}
            // extra={<Link to="/">全部项目</Link>}
            loading={projectLoading}
            bodyStyle={{
              padding: 0,
            }}
          >
            {/* <Result
              status="500"
              title="500"
              style={{
                background: 'none',
              }}
              subTitle="Sorry, the server is reporting an error."
              extra={
                <Link to="/">
                  <Button type="primary">Back Home</Button>
                </Link>
              }
            /> */}
          </Card>
          <Card
            bodyStyle={{
              padding: 0,
            }}
            bordered={false}
            className={styles.activeCard}
            title="动态"
            loading={activitiesLoading}
          >
            <List
              loading={activitiesLoading}
              renderItem={(item) => renderActivities(item)}
              dataSource={activities}
              className={styles.activitiesList}
              size="large"
            />
          </Card>
        </Col>
        <Col xl={8} lg={24} md={24} sm={24} xs={24}>
          <Card
            style={{
              marginBottom: 24,
            }}
            title="快速开始 / 便捷导航"
            bordered={false}
            bodyStyle={{
              padding: 0,
            }}
          >
            <EditableLinkGroup onAdd={() => {}} links={links} linkElement={Link} />
          </Card>
          <Card
            style={{
              marginBottom: 24,
            }}
            className="version-a"
            bordered={false}
            title="XX 指数"
            loading={data?.radarData?.length === 0}
          >
            <div className={styles.chart}>
              <Radar
                height={343}
                data={data?.radarData || []}
                angleField="label"
                seriesField="name"
                radiusField="value"
                area={{
                  visible: false,
                }}
                point={{
                  visible: true,
                }}
                legend={{
                  position: 'bottom-center',
                }}
              />
            </div>
          </Card>
          <Card
            bodyStyle={{
              paddingTop: 12,
              paddingBottom: 12,
            }}
            bordered={false}
            title="团队"
            loading={projectLoading}
          >
            <div className={styles.members}>
              <Row gutter={48}>
                {projectNotice.map((item) => (
                  <Col span={12} key={`members-item-${item.id}`}>
                    <Link to={item.href}>
                      <Avatar src={item.logo} size="small" />
                      <span className={styles.member}>{item.member}</span>
                    </Link>
                  </Col>
                ))}
              </Row>
            </div>
          </Card>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Workplace;

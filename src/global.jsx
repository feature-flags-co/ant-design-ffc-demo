import { Button, message, notification } from 'antd';
import { useIntl } from 'umi';
import defaultSettings from '../config/defaultSettings';
const { pwa } = defaultSettings;
const isHttps = document.location.protocol === 'https:';
import { FFCJsClient } from 'ffc-js-client-sdk/esm';
import { history, useModel } from 'umi';
import { outLogin } from '@/services/ant-design-pro/api';
import { stringify } from 'querystring';

const clearCache = () => {
  // remove all caches
  if (window.caches) {
    caches
      .keys()
      .then((keys) => {
        keys.forEach((key) => {
          caches.delete(key);
        });
      })
      .catch((e) => console.log(e));
  }
}; // if pwa is true

if (pwa) {
  // Notify user if offline now
  window.addEventListener('sw.offline', () => {
    message.warning(
      useIntl().formatMessage({
        id: 'app.pwa.offline',
      }),
    );
  }); // Pop up a prompt on the page asking the user if they want to use the latest version

  window.addEventListener('sw.updated', (event) => {
    const e = event;

    const reloadSW = async () => {
      // Check if there is sw whose state is waiting in ServiceWorkerRegistration
      // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration
      const worker = e.detail && e.detail.waiting;

      if (!worker) {
        return true;
      } // Send skip-waiting event to waiting SW with MessageChannel

      await new Promise((resolve, reject) => {
        const channel = new MessageChannel();

        channel.port1.onmessage = (msgEvent) => {
          if (msgEvent.data.error) {
            reject(msgEvent.data.error);
          } else {
            resolve(msgEvent.data);
          }
        };

        worker.postMessage(
          {
            type: 'skip-waiting',
          },
          [channel.port2],
        );
      });
      clearCache();
      window.location.reload();
      return true;
    };

    const key = `open${Date.now()}`;
    const btn = (
      <Button
        type="primary"
        onClick={() => {
          notification.close(key);
          reloadSW();
        }}
      >
        {useIntl().formatMessage({
          id: 'app.pwa.serviceworker.updated.ok',
        })}
      </Button>
    );
    notification.open({
      message: useIntl().formatMessage({
        id: 'app.pwa.serviceworker.updated',
      }),
      description: useIntl().formatMessage({
        id: 'app.pwa.serviceworker.updated.hint',
      }),
      btn,
      key,
      onClose: async () => null,
    });
  });
} else if ('serviceWorker' in navigator && isHttps) {
  // unregister service worker
  const { serviceWorker } = navigator;

  if (serviceWorker.getRegistrations) {
    serviceWorker.getRegistrations().then((sws) => {
      sws.forEach((sw) => {
        sw.unregister();
      });
    });
  }

  serviceWorker.getRegistration().then((sw) => {
    if (sw) sw.unregister();
  });
  clearCache();
}

window.addEventListener('locationchange', function () {
  console.log('locationchange');
  let params = new URLSearchParams(window.location.search);
  let ek = params.get('envkey');
  if (!ek || ek == null || ek.length < 10) {
    ek = localStorage.getItem('envkey');
    console.log('locationchange2');
    if (!ek || ek == null || ek.length < 10) {
      window.location = '/user/login?redirect=%2Fdashboard%2Fanalysis';
    }
  }
});
const params = new URLSearchParams(window.location.search);
let envkey = params.get('envkey');
if (envkey && envkey.length > 10) {
  localStorage.setItem('envkey', envkey);
} else {
  envkey = localStorage.getItem('envkey');
}
if (envkey) {
  let ffcUserInfoStr = localStorage.getItem('ffc-user-info');
  if (ffcUserInfoStr) {
    let ffcUserInfo = JSON.parse(ffcUserInfoStr);
    FFCJsClient.initialize(envkey, ffcUserInfo);

    // console.log('获客多init started');
    // Hokdo.init('e7e79f2de9399f5128028a3546272855', {
    //   userInfo: {
    //     name: ffcUserInfo.userName,
    //   }
    // })
    // console.log('获客多init done');
  } else {
    await outLogin();
    const { query = {}, pathname } = history.location;
    const { redirect } = query; // Note: There may be security issues, please note
    if (window.location.pathname !== '/user/login' && !redirect) {
      history.replace({
        pathname: '/user/login',
        search: stringify({
          redirect: '/dashboard/analysis',
        }),
      });
    }
  }
} else {
  await outLogin();
  const { query = {}, pathname } = history.location;
  const { redirect } = query; // Note: There may be security issues, please note
  if (window.location.pathname !== '/user/login' && !redirect) {
    history.replace({
      pathname: '/user/login',
      search: stringify({
        redirect: '/dashboard/analysis',
      }),
    });
  }
}

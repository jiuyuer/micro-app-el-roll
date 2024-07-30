// import './assets/main.css';
import { createApp } from 'vue';
import {
  createRouter,
  createMemoryHistory,
  createWebHashHistory
} from 'vue-router';
import App from './App.vue';
import { routes, microRoutes } from './router';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

declare global {
  interface Window {
    __MICRO_APP_NAME__: string;
    __MICRO_APP_ENVIRONMENT__: string;
  }
}

// 与基座进行数据交互
function handleMicroData(router: any, app: any) {
  window.microApp.addDataListener((data: any) => {
    console.log('============vite-vue3 来自主应用的数据============', data);
    // const wCore = data.wCore;
    // app.config.globalProperties.wCore = wCore;
    if (data.path && typeof data.path === 'string') {
      data.path = data.path.replace(/^#/, '');
      // 当基座下发path时进行跳转
      if (data.path && data.path !== router.currentRoute.value.path) {
        router.push({ path: data.path, replace: true });
      }
    }
  }, true);
}

let app: any | null = null;
let router: any | null = null;
let history: any | null = null;
function mount() {
  history = window.__MICRO_APP_ENVIRONMENT__
    ? createMemoryHistory(import.meta.env.BASE_URL)
    : createWebHashHistory(import.meta.env.BASE_URL); // 使用内存历史记录 防止污染基座history
  router = createRouter({
    history,
    routes: window.__MICRO_APP_ENVIRONMENT__ ? microRoutes : routes
  });

  app = createApp(App);
  app.use(router);
  app.use(ElementPlus);
  app.mount('#appvue3sys');
  // console.log('微应用appvue3sys渲染了');

  if (window.__MICRO_APP_ENVIRONMENT__) {
    // 与基座进行数据交互
    handleMicroData(router, app);
  }
}

// 将卸载操作放入 unmount 函数
function unmount() {
  app?.unmount();
  history?.destroy();
  app = null;
  router = null;
  history = null;
  // console.log('微应用appvue3sys卸载了');
}

// 微前端环境下，注册mount和unmount方法
if (window.__MICRO_APP_ENVIRONMENT__) {
  // @ts-ignore
  window[`micro-app-${window.__MICRO_APP_NAME__}`] = { mount, unmount };
} else {
  // 非微前端环境直接渲染
  mount();
}

import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router';
import { routes, microRoutes } from './router';
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  mode: window.__MICRO_APP_ENVIRONMENT__ ? 'abstract' : 'history',
  // __MICRO_APP_BASE_ROUTE__ 为micro-app传入的基础路由
  base: window.__MICRO_APP_BASE_ROUTE__ || process.env.BASE_URL,
  routes: window.__MICRO_APP_ENVIRONMENT__ ? microRoutes : routes
});

// 与基座进行数据交互
function handleMicroData() {
  window.microApp.addDataListener(data => {
    console.log('============来自主应用的数据============', data);
    // const wCore = data.wCore;
    // app.config.globalProperties.wCore = wCore;
    // Vue.prototype.wCore = wCore;
    // 当基座下发path时进行跳转
    if (data.path && data.path !== router.currentRoute.path) {
      router.push(data.path);
    }
  }, true);
}

let app = null;
// 将渲染操作放入 mount 函数
function mount() {
  app = new Vue({
    router,
    render: h => h(App)
  }).$mount('#app');

  console.log('微应用child-vue2渲染了');
  if (window.__MICRO_APP_ENVIRONMENT__) {
    handleMicroData();
  }
}

// 将卸载操作放入 unmount 函数
function unmount() {
  app.$destroy();
  app.$el.innerHTML = '';
  app = null;
  console.log('微应用child-vue2卸载了');
}

// 微前端环境下，注册mount和unmount方法
if (window.__MICRO_APP_ENVIRONMENT__) {
  window[`micro-app-${window.__MICRO_APP_NAME__}`] = { mount, unmount };
} else {
  // 非微前端环境直接渲染
  mount();
}

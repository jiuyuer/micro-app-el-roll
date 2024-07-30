import Layout from './../layout/index.vue';
import Routes from './config';
// 子应用独立使用时的路由示例
export const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/layout',
    name: 'layout',
    component: Layout,
    children: Routes
  }
];
// 微前端环境下的路由示例
export const microRoutes = Routes;

import HomeView from '../views/HomeView.vue';
const microRoutes = [
  {
    path: '/index',
    name: 'index',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/vue2/vue2-demo',
    name: 'demo',
    component: () => import('../views/demo.vue')
  }
];
export default microRoutes;

import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MicroAppVue2 from '../views/MicroAppVue2.vue';
import MicroAppVue3 from '../views/MicroAppVue3.vue';
import MicroAppVue3Window from '../views/MicroAppVue3Window.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/vue2/vue2-demo',
      name: 'vue2-demo',
      component: MicroAppVue2
    },
    {
      path: '/vue3/vue3-demo',
      name: 'vue3-demo',
      component: MicroAppVue3
    },
    {
      path: '/vue3/vue3-demo-window',
      name: 'vue3-demo-window',
      component: MicroAppVue3Window
    }
  ]
});

export default router;

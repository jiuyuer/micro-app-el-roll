import HomeView from '../views/HomeView.vue';
const microRoutes = [
  {
    path: '',
    redirect: '/index'
  },
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
    path: '/vue3/vue3-demo',
    name: 'demo',
    component: () => import('../views/demo.vue')
  },
  {
    path: '/app-menu',
    name: 'appmenu',
    redirect: '/app-menu/app-sub',
    children: [
      {
        path: '/app-menu/app-sub',
        name: 'appsub',
        component: () => import('../views/subMenu.vue')
      }
    ]
  },
  {
    path: '/app2-menu2',
    name: 'appmenu2',
    redirect: '/app2-menu2/app2-sub2',
    children: [
      {
        path: '/app2-menu2/app2-sub2',
        name: 'appsub2',
        redirect: '/app2-menu2/app2-sub2/app2-sub22',
        children: [
          {
            path: '/app2-menu2/app2-sub2/app2-sub22',
            name: 'appsub22',
            component: () => import('../views/subMenu.vue')
          }
        ]
      }
    ]
  }
];

export default microRoutes;

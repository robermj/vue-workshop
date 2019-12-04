export const router1 = `
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

// import(/* webpackChunkName: "basics" */ for lazy loading

const routes = [
  {
    path: '/',
    alias: '/home',
    component: Home,
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName: "basics" */ '../components/Basics.vue'),
        name: 'basics',
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
`;

export const router2 = `
import Vue from 'vue';
import router from './router';

import CodeSnippet from './components/CodeSnippet.vue';

new Vue({
  router,
  ...
}).$mount('#app');
`;

export const router3 = `
<router-view></router-view>`;

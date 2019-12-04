import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

// import(/* webpackChunkName: "basics" */
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.

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
      {
        path: '/vue-cli/',
        component: () => import(/* webpackChunkName: "vueCli" */ '../components/VueCli.vue'),
        name: 'vue-cli',
      },
      {
        path: '/conditionals-lists/',
        component: () => import(/* webpackChunkName: "cond-lists" */ '../components/Conditionals&Lists.vue'),
        name: 'conditionals-lists',
      },
      {
        path: '/forms/',
        component: () => import(/* webpackChunkName: "forms" */ '../components/Forms.vue'),
        name: 'forms',
      },
      {
        path: '/components/',
        component: () => import(/* webpackChunkName: "basics" */ '../components/Components.vue'),
        name: 'components',
      },
      {
        path: '/directives/',
        component: () => import(/* webpackChunkName: "directives" */ '../components/Directives.vue'),
        name: 'directives',
      },
      {
        path: '/filters-mixins/',
        component: () => import(/* webpackChunkName: "filers-mixins" */ '../components/Filters.vue'),
        name: 'filters-mixins',
      },
      {
        path: '/animations/',
        component: () => import(/* webpackChunkName: "animations" */ '../components/Animations.vue'),
        name: 'animations',
      },
      {
        path: '/requests/',
        component: () => import(/* webpackChunkName: "requests" */ '../components/Requests.vue'),
        name: 'requests',
      },
      {
        path: '/routing/',
        component: () => import(/* webpackChunkName: "routing" */ '../components/Routing.vue'),
        name: 'routing',
      },
      {
        path: '/state/',
        component: () => import(/* webpackChunkName: "state" */ '../components/State.vue'),
        name: 'state',
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/vue-info',
    name: 'vue-info',
    component: () => import(/* webpackChunkName: "vue-info" */ '../views/VueInfo.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

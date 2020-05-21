import Vue from 'vue'
import VueRouter from 'vue-router'
import AppRoot from '@/pages/AppRoot';
import UserAccount from '@/pages/UserAccount';

import authRoutes from './authRoutes';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {name: 'AuthRoot'},
    component: AppRoot
  },
  authRoutes,
  {
    path: '/account',
    name: 'UserAccount',
    meta: {requireAuth: true},
    component: UserAccount
  }
];

console.log(routes);

export default new VueRouter({
  mode: 'history',
  routes
});

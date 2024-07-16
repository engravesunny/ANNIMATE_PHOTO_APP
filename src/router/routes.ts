import { Component } from 'vue';
import { RouteRecordRaw } from 'vue-router'
const Layout = () => import('@/views/Layout/index.vue') as Component;
const Home = () => import('@/views/Home/index.vue') as Component;
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home
      }
    ]
  }
];

export default routes;

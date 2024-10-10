import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import("../views/Home.vue")
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/friends',
    name: 'Friends',
    component: () => import('../views/Friends.vue')
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: () => import('../views/Blogs.vue')
  },
  {
    path: '/articles/:filename',
    name: 'Articles',
    component: () => import("../views/Article.vue"),
    props: true
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import("../views/404.vue")
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { selector: to.hash }
    return { top: 0 }
  }
})
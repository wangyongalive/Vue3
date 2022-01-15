import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home'
import Login from '../views/login/Login'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter(to, from, next) { /* 路由独享的守卫 访问login路由才会执行*/
      const { isLogin } = localStorage;
      isLogin ? next({ name: 'Home'}):  next(); /*三元运算符*/
    }
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


// 全局前置守卫
router.beforeEach((to, from ,next) => {
  const { isLogin } = localStorage;
  /*login直接进入login页面 否则会进入死循环*/
  (isLogin || to.name === "Login") ? next() : next({ name: 'Login'});
})

export default router

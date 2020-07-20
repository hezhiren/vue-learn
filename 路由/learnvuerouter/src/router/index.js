import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'

// 1. 通过Vue.use(插件)，安装插件
Vue.use(Router)

const routes = [
  // 路由的默认路径
  {
    path: '',
    redirect: 'Home'
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/user/:id',
    component: User
  }
]

// 2. 创建VueRouter对象,并导出
export default new Router({
  // 将默认的hash模式改为history模式
  routes,
  mode: 'history',
  linkActiveClass: 'active',
})

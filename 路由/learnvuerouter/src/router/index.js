import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'


// 1. 通过Vue.use(插件)，安装插件
Vue.use(Router)

// 2020.7.20 路由懒加载
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const News = () => import('../components/HomeNews')
const Message = () => import('../components/HomeMessage')
// 第二种传参方式
const Profile = () => import('../components/Profile')

const routes = [
  // 路由的默认路径
  {
    path: '',
    redirect: 'home'
  },
  {
    path: '/home',
    component: Home,
    //2020.7.20 1449 路由嵌套
    children: [
      {
        path: '',
        redirect: 'news'
      },
      {
        path: '/home/news',
        component: News
      },
      {
        path: '/home/message',
        component: Message
      }
    ]
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/user/:id',
    component: User
  },
  {
    path: '/profile',
    component: Profile
  }
]

// 2. 创建VueRouter对象,并导出
export default new Router({
  // 将默认的hash模式改为history模式
  routes,
  mode: 'history',
  linkActiveClass: 'active',
})

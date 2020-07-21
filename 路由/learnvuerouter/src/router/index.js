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
    meta: {
      title: '首页'
    },
    //2020.7.20 1449 路由嵌套
    children: [
       // 在Home组件使用activated跳转默认路径，实现Home子组件状态保存
      // {
      //   path: '',
      //   redirect: 'news'
      // },
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
    component: About,
    meta: {
      title: '关于'
    }
  },
  {
    path: '/user/:id',
    component: User,
    meta: {
      title: '用户'
    }
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new Router({
  // 将默认的hash模式改为history模式
  routes,
  mode: 'history',
  linkActiveClass: 'active',
})

// 前置导航守卫（guard）
router.beforeEach((to, from, next)=>{
  // 从from跳转到to
  // matched[0]，处理嵌套路由undefined的情况
  document.title = to.matched[0].meta.title
  next() // 必须调用
})

// 后置导航守卫
router.afterEach((to, from) => {

})

// 2. 创建VueRouter对象,并导出
export default router

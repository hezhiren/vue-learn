<template>
  <div id="app">
    <!--tag属性：tag可以指定<router-link>之后渲染成什么组件-->
    <!--active-class="active" 菜单高亮 active为自定义样式-->
    <!--<router-link to='/home' tag='button' replace active-class="active">首页</router-link>-->
    <router-link to='/home' tag='button'>首页</router-link>
    <!-- replace禁止浏览器按钮返回 -->
    <router-link to='/about' replace>关于</router-link>
    <!-- 第一种传参方式 -->
    <router-link :to = "'/user/' + userId" replace>用户</router-link>
    <!-- 第二种传参方式 -->
    <!-- <router-link :to="{path:'/profile', query: {name:'张三', age:20, height: 1.80}}">档案</router-link> -->

    <!--代码实现第二种参数方式-->
    <button @click="profileClick" >档案</button>

    <!-- 让路由显示出来-->
    <router-view></router-view>

    <!-- 通过代码实现 -->
    <!-- <button @click='homeClick'>首页</button>
     <button @click="aboutClick">关于</button> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 6
    }
  },

  // 通过代码实现路由
  // methods: {
  //    homeClick() {
  //     //  this.$router.push('/home')
  //      this.$router.replace('/home')
  //    },
  //    aboutClick() {
  //     //  this.$router.push('/about')
  //      this.$router.replace('/about')
  //    }
  // }

  // 通过代码实现第二种传参方式
  methods: {
    profileClick() {
      this.$router.push({
        path: '/profile',
        query: {
          name: '张三',
          age: 18,
          height: 1.78
        }
      })
    }
  }
}
</script>

<style>
  .active{
    color: red;
  }
</style>

<template>
  <div>
    <h2>我是首页</h2>

    <!-- 嵌套路由 -->
    <router-link to='/home/news'>新闻</router-link>
    <router-link to='/home/message'>消息</router-link>
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  name: 'Home',
  created() {
    console.log("Home created")
  },
  destroyed() {
    console.log("Home destroyed")
  },
  // 2020.7.21 这两个函数只有该组件被保持了状态使用keep-alive时，才是有效的
  activated() {
    // 界面进入活跃状态的时候，把beforeRouteLeave记录的离开时的路径写进路由
    this.$router.push(this.path)
  },
  // 记录离开时的路径
  beforeRouteLeave(to, from, next) {
    this.path = this.$route.path
    next();
  }
}
</script>

<style>

</style>

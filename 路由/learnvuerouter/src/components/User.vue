<template>
  <div>
    <h2>我是用户界面</h2>
    <h3>用户信息：{{ $route.params.id }}</h3>
  </div>
</template>

<script>
export default {
  name: 'User',
  created() {
    console.log("User created")
  },
  destroyed() {
    console.log("User destroyed")
  }
}
</script>

<style>

</style>

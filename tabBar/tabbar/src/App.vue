<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <!-- 不是动态绑定的话，path不需要加: -->
      <tab-bar-item path='/home' activeColor='#FF5777'>
        <img slot="item-icon" src="./assets/img/tabbar/home.svg">
        <img slot="item-icon-active" src="./assets/img/tabbar/home_active.svg">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category'>
        <img slot="item-icon" src="./assets/img/tabbar/category.svg">
        <img slot="item-icon-active" src="./assets/img/tabbar/category_active.svg">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path='/cart'>
        <img slot="item-icon" src="./assets/img/tabbar/shopcart.svg">
        <img slot="item-icon-active" src="./assets/img/tabbar/shopcart_active.svg">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/profile'>
        <img slot="item-icon" src="./assets/img/tabbar/profile.svg">
        <img slot="item-icon-active" src="./assets/img/tabbar/profile_active.svg">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar'
import TabBarItem from './components/tabbar/TabBarItem'
export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
  @import './assets/css/base.css';
</style>

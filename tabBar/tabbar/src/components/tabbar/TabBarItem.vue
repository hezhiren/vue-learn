<template>
    <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive"><slot name='item-icon'></slot></div>
      <div v-else><slot name='item-icon-active'></slot></div>
      <div :style="activeStyle" ><slot name='item-text'></slot></div>
     
      <!-- <img src="../../assets/img/tabbar/home.svg" alt="">
      <div>首页</div> -->
    </div>
    <!-- <div class="tab-bar-item">
       <img src="../../assets/img/tabbar/home.svg" alt="">
       <div>分类</div>
    </div>
    <div class="tab-bar-item">
       <img src="../../assets/img/tabbar/home.svg" alt="">
       <div>购物车</div>
    </div>
    <div class="tab-bar-item">
       <img src="../../assets/img/tabbar/home.svg" alt="">
       <div>我的</div> -->
    <!-- </div> -->
</template>

<script>
export default {
  name: 'TabBarItem',
  props:{
    path: String,
    activeColor: {
      type: String,
      default: '#FF5777'
    }
  },
  data() {
    return {
      // isActive: true
    }
  },
  computed: {
    // 路径匹配，匹配到了当前路径，则激活菜单
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    // 文字动态颜色控制
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  }
}
</script>

<style>
 .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-top: 3px;
  }

  /* .active {
    color:#FF5777;
  } */
</style>

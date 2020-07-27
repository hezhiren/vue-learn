<template>
  <div id="app">
    <h2>----------响应式原理------------</h2>
    <h2>{{ $store.state.info }}</h2>
    <button @click="changeEle">修改元素</button>

    <h2>----------Module------------</h2>
    <h2>{{ $store.state.a.name }}</h2>
    <button @click="updateName">修改名字</button>

    <h2>-----------App 组件------------</h2>
    <h2>{{ $store.state.counter }}</h2>
    <button @click="add">+</button>
    <button @click="dec">--</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>

    <h2>{{ $store.getters.powerCounter }}</h2>

    <ul>
      <li v-for="(item, index) in $store.getters.studentsOld" :key="index">
       {{item}}
      </li>
    </ul>

     <ul>
      <li v-for="(item, index) in $store.getters.moreAgeStu(20)" :key="index">
       {{item}}
      </li>
    </ul>

    <h2>{{ $store.getters.sutdentsOldLength }}</h2>

    <button @click="addStudent">添加学生</button>

    <h2>-----------Hello Vuex 组件------------</h2>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'
import {INCREMENT} from "./store/mutation-types"

export default {
  name: 'App',
  components: {
    HelloVuex
  },
  methods: {
    add() {
      this.$store.commit(INCREMENT)
    },
    dec() {
      this.$store.commit('decrement')
    },
    // addCount(count) {
    //   this.$store.commit('addCountMu', count)
    // },
    // Mutation, 第二种提交方式，传入type
    addCount(count) {
      this.$store.commit({
        type: "addCountMu",
        count
      })
    },
    addStudent() {
      const s = {"id":5, "name":"sunliu", "age":50}
      this.$store.commit('addStudentMu', s)
    },
    changeEle() {
      // this.$store.commit('changeEleMu')

      // 异步处理在action中实现
      this.$store.dispatch('aUpdateInfo', 'payload').then((res) => console.log(res))
    }
  }
}
</script>

<style>

</style>

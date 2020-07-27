import Vue from "vue"
import Vuex from "vuex"
import {INCREMENT} from "./mutation-types"

// 1.安装插件
Vue.use(Vuex)

const moduleA = {
  state: {
    name: '张珊'
  },
  mutations: {

  }
}

// 2.创建对象
const store = new Vuex.Store({
  //
  state: {
    counter: 1000,
    students: [
      {"id": 1, "name": "zhangsan", "age": 28},
      {"id": 2, "name": "lisi", "age": 25},
      {"id": 3, "name": "wangwu", "age": 18},
      {"id": 4, "name": "zhaoliu", "age": 14}
    ],
    info: {
      name: '哪吒',
      age: 20
    }
  },
  // 修改状态
  // mutataion的所有代码都不能是异步的
  mutations: {
    // mutations的类型常量，将方法名设置为常量
    [INCREMENT](state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    // Mutation提交风格1---传入一个变量
    // addCountMu(state, count) {
    //   state.counter += count
    // },

    // Mutation提交风格二： payLoad称为载荷。是一个对象
    addCountMu(state, payLoad) {
      console.log(payLoad)
      state.counter += payLoad.count
    },
    // Mutation提交风格2---传入一个对象
    addStudentMu(state, student) {
      state.students.push(student)
    },

    // 响应式原理
    changeEleMu(state) {
      // 后加的元素加入响应式原理
      // state.info["address"] = "南京"
      // 通过vue的set方法，或者调用数组的响应式方法
      // Vue.set(state.info, "address", "南京")
      state.info.name = "amy"
      // 模拟异步操作, 页面修改了，但是devtools里没有修改 ，不能进行异步操作
      // setTimeout(() => {
      //   state.info.name = "amy"
      // }, 1000);
    }
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    studentsOld(state) {
      return state.students.filter((student) => student.age > 14)
    },
    sutdentsOldLength(state, getters) {
      return getters.studentsOld.length
    },
    // 带参数传递
    moreAgeStu(state) {
      return age => {
        return state.students.filter(s => s.age > age)
      }
    }
  },
  // 异步操作在action中进行
  actions: {
    // 也可以传递参数
    // Action 通过 store.dispatch 方法触发：
    // context对象与 store 实例具有相同方法和属性，但不是store本身
    aUpdateInfo(context, payLoad) {
      // 可以返回Promise
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('changeEleMu', payLoad)
          resolve("success")
        }, 1000);
      })
    }
  },
  modules: {
    a: moduleA
  }

})

// 导出store
export default store

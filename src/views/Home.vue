<template>
  <div class="home">
    <h1>{{message}}</h1>
    <div>
      {{$store.state.counter}}
    </div>
    <br>
    <h1>---异步---</h1>
    <div>{{$store.state.info}}</div>
    <button @click="infoClick">修改信息</button>
    <br>
    <h1>App---gtters的使用</h1>
    <div>
      {{$store.getters.powerCounter}}
    </div>
    <button @click = "handleAddClick">+</button>
    <button @click = "handleSubClick">-</button>
    <button @click = "addCount(5)">+5</button>
    <button @click = "addCount(10)">+10</button>
    <About/>
  </div>
</template>

<script>
import About from './About'
export default {
  name: 'Home',
  components: {
    About
  },
  data() {
    return{
      message: '我是home组件'
    }
  },
  methods: {
    handleAddClick() {
      this.$store.commit('increment')
    },
    handleSubClick() {
      this.$store.commit('decrement')
    },
    addCount(count) {
      //payload: 负载
      //1.普通的提交封装
      // this.$store.commit('incrementCounter', count)
      // 2.特殊的提交封装
      this.$store.commit({
        type: 'incrementCounter',
        count
      })
    },
    infoClick() {
      this.$store.dispatch('aUpdateInfo', '我是payload').then(res => {
        console.log(res);
      })
    }
  }
}
</script>
<style scoped>
</style>

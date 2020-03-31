export default {
  //方法
  increment(state) {
    state.counter++
  },
  decrement(state) {
    state.counter--
  },
  incrementCounter(state,payload) {
    console.log(payload);
    
    state.counter += payload.count
  },
  updateInfo(state) {
    state.info.name = "HZM"
  }
}
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import modulesA from './modules/modulesA'

Vue.use(Vuex)

const state = {
  counter: 0,
  info: {
    name: "hzm",
    age: 18,
    height: 1.75
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: modulesA,
  }
})

import Vue from 'vue'
import Vuex from 'vuex'
import moduleSocket from './socket'
import moduleBets from './bets'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    socket: moduleSocket,
    bets: {
      namespaced: true,
      ...moduleBets,
    },
  },
})

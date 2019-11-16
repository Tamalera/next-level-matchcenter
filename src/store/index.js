import Vue from 'vue'
import Vuex from 'vuex'
import moduleSocket from './socket'
import moduleBets from './bets'
import moduleMatch from './match'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    socket: moduleSocket,
    bets: {
      namespaced: true,
      ...moduleBets,
    },
    match: {
      namespaced: true,
      ...moduleMatch,
    },
  },
})

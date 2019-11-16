export default {
  state: {
    timer: 0,
    interval: null,
  },

  mutations: {
    INCREMENT_TIMER(state, seconds) {
      state.timer += seconds
    },

    SET_INTERVAL(state, interval) {
      state.interval = interval
    },

    CLEAR_INTERVAL(state) {
      clearInterval(state.interval)
      state.interval = null
    },
  },

  actions: {
    startTimer({ commit }) {
      commit(
        'SET_INTERVAL',
        setInterval(() => commit('INCREMENT_TIMER', 2), 20)
      )
    },

    stopTimer({ commit }) {
      commit('CLEAR_INTERVAL')
    },
  },

  getters: {
    minutes: state => Math.floor(state.timer / 60),
    seconds: state => state.timer % 60,
  },
}

export default {
  state: {
    timer: 0,
    interval: null,
  },

  mutations: {
    INCREMENT_TIMER(state, seconds) {
      state.timer += seconds
    },
  },

  actions: {
    startTimer({ commit }) {
      this.interval = setInterval(() => commit('INCREMENT_TIMER', 2), 20)
    },

    stopTimer() {
      clearInterval(this.interval)
    },
  },

  getters: {
    minutes: state => Math.floor(state.timer / 60),
    seconds: state => state.timer % 60,
  },
}

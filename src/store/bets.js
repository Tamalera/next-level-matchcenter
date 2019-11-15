export default {
  state: {
    betQueue: false,
  },

  mutations: {
    ADD_BET(state, bet) {
      state.betQueue.push(bet)
    },
  },

  actions: {
    newBet: function(context, payload) {
      console.log('new bet', payload)
    },
  },

  getters: {},
}

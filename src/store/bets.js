export default {
  state: {
    bets: [],
  },

  mutations: {
    ADD_BET(state, bet) {
      state.bets.push(bet)
    },

    REMOVE_BET(state, bet) {
      const i = state.bets.findIndex(b => b.id === bet.id)
      if (i >= 0 && i < state.bets.length) {
        state.bets.splice(i, 1)
      }
    },
  },

  actions: {
    newBet({ commit }, payload) {
      console.log('new bet', payload)

      if (payload && payload.data) {
        commit('ADD_BET', payload)
      }
    },

    declineBet({ commit }, payload) {
      if (payload && payload.data) {
        commit('REMOVE_BET', payload)
        console.log('bet declined', payload)
      }
    },

    betOnBet({ commit, dispatch }, payload) {
      if (payload && payload.data && payload.data.userBet) {
        dispatch('sendMessage', payload)

        commit('REMOVE_BET', payload)
        console.log('bet on bet', payload)
      }
    },
  },

  getters: {
    recentBet: state => state.bets[0],
  },
}

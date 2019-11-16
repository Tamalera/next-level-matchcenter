export default {
  state: {
    favorites: [],
  },

  mutations: {
    ADD_FAVORITE(state, id) {
      state.favorites.push(id)
    },

    REMOVE_FAVORITE(state, id) {
      state.favorites.splice(state.favorites.indexOf(id), 1)
    },
  },

  actions: {},

  getters: {},
}

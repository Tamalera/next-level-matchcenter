import Vue from 'vue'

export default {
  state: {
    isConnected: false,
    reconnectError: false,
    events: [],
    closedEventIds: [],
  },

  mutations: {
    SOCKET_ONOPEN(state, event) {
      console.log('socket connected')
      Vue.prototype.$socket = event.currentTarget
      state.isConnected = true
    },
    SOCKET_ONCLOSE(state) {
      state.isConnected = false
    },
    SOCKET_ONERROR(state, event) {
      console.error(state, event)
    },
    SOCKET_ONMESSAGE(state, payload) {
      console.log('socket message:', payload)
      state.events.unshift(payload)
    },
    SOCKET_RECONNECT(state, count) {
      console.info(state, count)
    },
    SOCKET_RECONNECT_ERROR(state) {
      state.reconnectError = true
    },
    REMOVE_EVENT(state, event) {
      const i = state.events.findIndex(e => e.id === event.id)
      if (i >= 0 && i < state.events.length)
        state.closedEventIds.unshift(
          ...state.events.splice(i, 1).map(e => e.id)
        )
    },
  },

  actions: {
    send: function({ state }, payload) {
      if (!state.isConnected) throw new Error('Not connected')

      Vue.prototype.$socket.send(JSON.stringify(payload))
    },
  },

  getters: {
    eventsIsClosed: state => state.closedEventIds.includes,
  },
}

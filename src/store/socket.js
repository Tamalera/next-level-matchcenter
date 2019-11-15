import Vue from 'vue'

export default {
  state: {
    isConnected: false,
    message: '',
    reconnectError: false,
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
    SOCKET_ONMESSAGE(state, message) {
      console.log('socket message:', message)
      state.message = message
    },
    SOCKET_RECONNECT(state, count) {
      console.info(state, count)
    },
    SOCKET_RECONNECT_ERROR(state) {
      state.reconnectError = true
    },
  },

  actions: {
    send: function(context, message) {
      Vue.prototype.$socket.send(message)
    },
  },

  getters: {},
}

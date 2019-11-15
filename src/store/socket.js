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
      console.log('new socket message:', payload)
      payload.status = 'new'
      state.events.push(payload)
    },
    SOCKET_RECONNECT(state, count) {
      console.info(state, count)
    },
    SOCKET_RECONNECT_ERROR(state) {
      state.reconnectError = true
    },
    WORKING_ON_EVENT(state, event) {
      const e = state.events.find(e => e.id === event.id)
      if (e) {
        e.status = 'wip'
        console.log(`event with id "${event.id}" is being worked on:`, event)
      }
    },
    REMOVE_EVENT(state, event) {
      const i = state.events.findIndex(e => e.id === event.id)
      if (i >= 0 && i < state.events.length) {
        state.events.splice(i, 1)
      }
    },
  },

  actions: {
    sendMessage: function({ state }, payload) {
      if (!state.isConnected) throw new Error('Not connected')

      Vue.prototype.$socket.send(JSON.stringify(payload))
    },

    nextEvent: function({ state, commit }) {
      const event = state.events.find(e => e.status === 'new')
      if (event && event.id) {
        commit('WORKING_ON_EVENT', event)
        return event
      }
    },
  },
}

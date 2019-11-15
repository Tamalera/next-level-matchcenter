<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/mini-games">Mini Games</router-link>
      <router-link to="/fashion-corner">Fashion Corner</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['socket']),
  },

  watch: {
    // Socket Event Worker
    'socket.events'(events) {
      const event = events[0]
      if (
        event &&
        event.id &&
        event.status === 'new' &&
        !this.$store.getters.eventsIsClosed(event.id)
      ) {
        this.$store.commit('WORKING_ON_EVENT', event)

        switch (event.type) {
          case 'new-bet':
            this.$store.dispatch('bets/newBet', event)
            break
        }

        this.$store.commit('REMOVE_EVENT', event)
      }
    },
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

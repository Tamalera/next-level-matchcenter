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
    async 'socket.events'() {
      const event = await this.$store.dispatch('nextEvent')
      if (event) {
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

<style lang="scss"></style>

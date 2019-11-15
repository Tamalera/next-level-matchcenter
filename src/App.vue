<template>
  <div id="app">
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

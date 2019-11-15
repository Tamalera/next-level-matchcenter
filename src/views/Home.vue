<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" class="mx-auto" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },

  computed: {
    ...mapState(['socket']),
  },

  watch: {
    'socket.isConnected'(isConnected) {
      if (isConnected) this.$socket.send({ foo: 'bar' })
    },
  },
}
</script>

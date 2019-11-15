<template>
  <div>
    <div class="banner">
      Mini Games
    </div>
    <Penalty />
    <Corner />
  </div>
</template>

<script>
import Penalty from '@/views/Penalty.vue'
import Corner from '@/views/Corner.vue'

export default {
  name: 'MiniGames',
  components: {
    Penalty,
    Corner,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>

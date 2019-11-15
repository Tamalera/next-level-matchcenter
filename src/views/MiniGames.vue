<template>
  <div>
    <div class="bg-yellow-500 h-24 p-4 flex items-center">
      <h1 class="text-5xl">Mini Games</h1>
    </div>
    <Penalty v-if="false" />
    <Corner v-if="true" />
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

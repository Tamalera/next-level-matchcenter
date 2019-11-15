<template>
  <div>
    <div class="text-semibold bg-yellow-500 h-32 p-4 flex items-center">
      <h1 class="text-5xl">Mini Games</h1>
    </div>
    <div v-if="action == ''" class="my-32 text-center">
      <div class="mt-16">
        <button
          class="font-semibold text-3xl bg-yellow-500 rounded-lg w-2/3 h-32"
          @click="action = 'penalty'"
        >
          Penalty
        </button>
      </div>
      <div class="mt-16">
        <button
          class="font-semibold text-3xl bg-yellow-500 rounded-lg w-2/3 h-32"
          @click="action = 'corner'"
        >
          Corner
        </button>
      </div>
    </div>
    <div v-if="action != ''" class="my-8 text-center">
      <button
        class="text-2xl bg-yellow-500 rounded-lg w-2/3 h-24"
        @click="action = ''"
      >
        Back
      </button>
    </div>
    <Penalty v-if="action == 'penalty'" />
    <Corner v-if="action == 'corner'" />
  </div>
</template>

<script>
import Penalty from '@/components/Penalty.vue'
import Corner from '@/components/Corner.vue'

export default {
  name: 'MiniGames',
  components: {
    Penalty,
    Corner,
  },
  data: function() {
    return {
      action: '',
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>

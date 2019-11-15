<template>
  <div class="w-full">
    <button
      class="block mx-auto px-4 py-2 border-2 rounded-lg bg-gray-100 hover:bg-gray-200 focus:outline-none"
      @click="triggerBetEvent"
    >
      Trigger
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eventId: 0,
    }
  },

  methods: {
    triggerBetEvent() {
      this.$store.dispatch('send', {
        id: 'event-' + this.eventId, // event id
        type: 'new-bet',
        data: {
          name: 'nextGoal', // name of this particular bet
          text: 'Wer schiesst das nächste Tor für YB?',
          answers: [
            {
              answerType: 'player', // type of answer (selection, number, boolean, player)
              team: 'home', // team of which a player can be selected (home, away, any)
            },
          ],
        },
      })

      this.eventId++
    },
  },
}
</script>

<style lang="scss" scoped></style>

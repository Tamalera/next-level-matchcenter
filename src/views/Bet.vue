<template>
  <div class="w-full">
    <button
      class="block mx-auto border-2 rounded-lg px-4 py-2"
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
        id: 'event-' + this.eventId,
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

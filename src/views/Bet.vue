<template>
  <div class="w-full">
    <button
      class="block mx-auto px-4 py-2 border-2 rounded-lg bg-gray-100 hover:bg-gray-200 focus:outline-none"
      @click="triggerBetEvent"
    >
      Trigger
    </button>

    <div class="mt-4 px-2">
      <div
        v-for="bet in bets"
        :key="bet.id"
        class="mb-2 last:mb-0 flex justify-between px-6 py-4 bg-black rounded-lg"
      >
        <div class="w-full">
          <div
            class="cursor-pointer"
            @click="open === bet.id ? (open = null) : (open = bet.id)"
          >
            <h2 class="text-xl text-yellow-500 font-bold">
              Wer schiesst das nächste Tor für YB?
            </h2>
            <h3 class="mt-1 text-gray-400">
              Wette jetzt und gewinne drei Punkte.
            </h3>
          </div>

          <div v-if="open === bet.id">
            <div>
              <select
                type="text"
                class="mt-3 px-4 py-2 rounded-lg bg-yellow-100 focus:outline-none"
              >
                <option disabled selected>Torschütze</option>
                <option value="1">Marco Wölfli</option>
                <option value="2">Steve von Bergen</option>
                <option value="3">Christoph Spycher</option>
              </select>
            </div>

            <div class="flex justify-end">
              <button
                class="mt-3 px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-400 focus:outline-none font-bold"
              >
                Tipp abgeben
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      eventId: 0,
      open: null,
    }
  },

  computed: {
    ...mapState('bets', ['bets']),
  },

  methods: {
    triggerBetEvent() {
      this.$store.dispatch('sendMessage', {
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

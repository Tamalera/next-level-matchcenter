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
        class="mb-2 last:mb-0 flex justify-between px-6 py-5 bg-black rounded-lg"
      >
        <div class="w-full">
          <div
            class="cursor-pointer"
            @click="open === bet.id ? (open = null) : (open = bet.id)"
          >
            <h2 class="text-xl text-yellow-500 font-bold">
              {{ bet.data.text }}
            </h2>
            <h3 class="mt-1 text-gray-400">
              Wette jetzt und gewinne drei Punkte.
            </h3>
          </div>

          <div v-if="open === bet.id">
            <div class="flex flex-wrap">
              <div
                v-for="(answer, i) in bet.data.answers"
                :key="i"
                class="w-1/2 mt-3 px-2"
              >
                <select
                  v-if="answer.answerType === 'player'"
                  v-model="answer.userBet"
                  class="w-full px-4 py-2 rounded-lg bg-yellow-100 focus:outline-none"
                >
                  <option disabled selected>Torschütze</option>
                  <option
                    v-for="player in answer.players"
                    :key="player.value"
                    :value="player.value"
                    >{{ player.name }}</option
                  >
                </select>

                <input
                  v-if="answer.answerType === 'number'"
                  v-model="answer.userBet"
                  type="number"
                  :min="answer.min"
                  :max="answer.max"
                  :placeholder="answer.label"
                  class="w-full px-4 py-2 rounded-lg bg-yellow-100 focus:outline-none"
                />
              </div>
            </div>

            <div class="flex justify-end">
              <button
                class="mt-3 px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-400 focus:outline-none font-bold tracking-wide"
                @click="$store.dispatch('bets/betOnBet', bet)"
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
      if (this.eventId % 2 === 0) {
        this.$store.dispatch('sendMessage', {
          id: 'event-' + this.eventId, // event id
          type: 'new-bet',
          data: {
            name: 'nextGoal', // name of this particular bet
            text: 'Wer schiesst das nächste Tor für YB?',
            answers: [
              {
                answerType: 'player', // type of answer (selection, number, boolean, player)
                players: [
                  { id: '1', name: 'Marco Wölfli' },
                  { id: '2', name: 'Steve von Bergen' },
                  { id: '3', name: 'Christoph Spycher' },
                ],
              },
            ],
          },
        })
      } else {
        this.$store.dispatch('sendMessage', {
          id: 'event-' + this.eventId, // event id
          type: 'new-bet',
          data: {
            name: 'endResult', // name of this particular bet
            text: 'Wie wird dieses Spiel ausgehen?',
            answers: [
              {
                answerType: 'number', // type of answer (selection, number, boolean, player)
                label: 'Heim',
                min: 0,
              },
              {
                answerType: 'number', // type of answer (selection, number, boolean, player)
                label: 'Gast',
                min: 0,
              },
            ],
          },
        })
      }

      this.eventId++
    },
  },
}
</script>

<style lang="scss" scoped></style>

<template>
  <div class="pt-64 pb-16">
    <div
      class="fixed z-20 top-0 left-0 right-0 mt-2 mx-2 flex justify-end opacity-25"
    >
      <button
        class="mr-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 focus:outline-none"
        @click="$store.commit('match/INCREMENT_TIMER', -5 * 60)"
      >
        -5
      </button>
      <button
        class="mr-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 focus:outline-none"
        @click="$store.commit('match/INCREMENT_TIMER', 5 * 60)"
      >
        +5
      </button>
      <button
        class="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 focus:outline-none"
        @click="running = !running"
      >
        {{ running ? 'Pause' : 'Start' }}
      </button>
    </div>

    <div class="fixed z-10 top-0 w-full">
      <div
        class="box-shadow-fade pt-8 pb-16 flex flex-col items-center bg-no-repeat bg-center bg-cover shadow-inner "
        :style="{
          backgroundImage: 'url(/images/stadium.png)',
        }"
      >
        <h2 v-if="minutes < 90" class="text-6xl tracking-wide">
          {{ minutes | twoCharClock }}:{{ seconds | twoCharClock }}
        </h2>
        <h2 v-if="minutes >= 90" class="text-5xl tracking-wide">
          90:00
        </h2>
        <h3 v-if="minutes >= 90" class="-mt-1 text-lg">
          + {{ (minutes - 90) | twoCharClock }}:{{ seconds | twoCharClock }}
        </h3>
      </div>

      <div
        class="w-2/3 -mt-12 mx-auto py-4 flex items-start bg-black text-yellow-100 rounded-lg shadow-lg"
      >
        <div class="flex-grow flex flex-col text-center">
          <h3 class="text-4xl">
            {{ teamGoals(filteredGoals, 'home').length }}
          </h3>
          <h4 class="text-lg tracking-wide">BSC YB</h4>
        </div>
        <div class="text-center">
          <h3 class="text-4xl">:</h3>
        </div>
        <div class="flex-grow flex flex-col text-center">
          <h3 class="text-4xl">
            {{ teamGoals(filteredGoals, 'away').length }}
          </h3>
          <h4 class="text-lg tracking-wide">FC Basel</h4>
        </div>
      </div>
    </div>

    <div class="mt-6 mx-auto px-4 leading-tight">
      <div v-for="(goal, i) in filteredGoals" :key="i" class="flex">
        <div class="w-5/12 text-sm text-gray-700 text-right">
          {{ goal.team === 'home' ? goal.name : '' }}
        </div>
        <div class="w-1/6 text-sm text-center font-medium">
          {{ goal.minute }}'
        </div>
        <div class="w-5/12 text-sm text-gray-700">
          {{ goal.team === 'away' ? goal.name : '' }}
        </div>
      </div>
    </div>

    <div
      v-if="minutes < 45"
      class="mt-6 mx-4 py-5 px-6 bg-black rounded-lg shadow-lg"
    >
      <h2 class="text-xl text-yellow-100 font-bold tracking-wide uppercase">
        Homespecial
      </h2>
      <p class="mt-1 text-gray-400">
        Dieses Spiel ist zu Hause in Bern. Wette jetzt auf die Homespecials!
      </p>
      <div class="mt-3 flex justify-center">
        <router-link
          to="/homespecial"
          class="px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-400 focus:outline-none font-bold tracking-wide"
        >
          Los geht's!
        </router-link>
      </div>
    </div>

    <div class="mt-6 pb-3 px-4">
      <h2 class="mb-2 text-xl font-bold tracking-wide uppercase">Liveticker</h2>

      <Liveticker :events="filteredTickerEvents" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Liveticker from '@/components/Liveticker'

export default {
  components: {
    Liveticker,
  },

  filters: {
    twoCharClock(val) {
      if (val < 10) return '0' + val
      return val
    },
  },

  data() {
    return {
      goals: [
        { minute: 7, team: 'home', name: 'Guillaume Hoarau' },
        { minute: 9, team: 'home', name: 'Guillaume Hoarau' },
        { minute: 22, team: 'away', name: 'Valentin Stocker' },
        { minute: 52, team: 'home', name: 'Kevin Mbabu' },
      ],
      tickerEvents: [
        {
          id: 1,
          type: 'bet',
          betType: 'result',
          minute: 5,
          points: 3,
          title: 'Wie wird dieses Spiel ausgehen?',
          text: 'Wette jetzt auf das Endresultat und gewinne drei Punkte.',
        },
        {
          id: 2,
          type: 'bet',
          betType: 'corner',
          minute: 41,
          points: 1,
          title: 'Ein Eckstoss für YB. Wer wird den Ball als erster berühren?',
          text: 'Versuche dein Glück und gewinne einen Punkt.',
        },
        {
          id: 3,
          type: 'info',
          minute: 68,
          title: 'Penalty gegen YB',
          text: 'Nach Foul an Ademi gibt es einen Penalty.',
        },
        {
          id: 4,
          type: 'bet',
          betType: 'penalty',
          minute: 68,
          points: 2,
          title: 'Wohin wird der Penaltyschütze den Ball ins Tor schiessen?',
          text: 'Gewinne zwei Punkte indem du richtig rätst.',
        },
        {
          id: 5,
          type: 'info',
          minute: 70,
          title: 'Wölfli hält den Penalty',
          text:
            'Unten links geraten, Hechtsprung und Ball sicher gefangen - ein Krimi!',
        },
        {
          id: 6,
          type: 'info',
          minute: 84,
          title: 'Hoarau verletzt',
          text:
            'Nach Zusammenstoss mit Kaiser, verlässt Hoarau hinkend das Spielfeld.',
        },
        {
          id: 7,
          type: 'info',
          minute: 79,
          title: 'Ein wunderschöner Angriff',
          text:
            'Roger Assalé trippelt an zwei Gegnern vorbei und prescht in Richtung Strafraum.',
        },
      ],
    }
  },

  computed: {
    ...mapGetters('match', ['minutes', 'seconds']),

    filteredTickerEvents() {
      return this.tickerEvents
        .filter(e => e.minute <= this.minutes)
        .sort((a, b) => {
          if (a.minute > b.minute) return -1
          if (a.minute < b.minute) return 1
          if (a.type === 'bet' && b.type === 'info') return -1
          if (a.type === 'info' && b.type === 'bet') return 1
          return 0
        })
    },

    filteredGoals() {
      return this.goals
        .filter(e => e.minute <= this.minutes)
        .sort((a, b) => {
          if (a.minute > b.minute) return -1
          if (a.minute < b.minute) return 1
          return 0
        })
    },

    running: {
      get() {
        return !!this.$store.state.match.interval
      },
      set(val) {
        if (val) this.$store.dispatch('match/startTimer')
        else this.$store.dispatch('match/stopTimer')
      },
    },
  },

  methods: {
    sendMessage() {
      let next = this.textTicker.splice(0, 1)
      this.showTextTicker.unshift(...next)
    },

    teamGoals(goals, teamname) {
      return goals.filter(e => e.team === teamname)
    },
  },
}
</script>

<style lang="scss" scoped>
.box-shadow-fade {
  box-shadow: 0 -10px 50px 60px #fff;
}
</style>

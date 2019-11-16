<template>
  <div class="pt-64 pb-16">
<<<<<<< HEAD
    <div class="z-10 fixed top-0 left-0 mt-2 ml-2 opacity-25 hover:opacity-100">
  <div class="pt-64">
=======
>>>>>>> 64897cab258c176f36be10e182860c4f988006ef
    <div
      class="z-10 fixed top-0 left-0 right-0 mt-2 mx-2 flex justify-end opacity-25"
    >
      <button
        class="mr-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 focus:outline-none"
        @click="incrementTimer(-5 * 60)"
<<<<<<< HEAD
      >
      </button>
      <button
        class="mr-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 focus:outline-none"
        @click="incrementTimer(5 * 60)"
      >
      </button>
=======
      ></button>
      <button
        class="mr-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 focus:outline-none"
        @click="incrementTimer(5 * 60)"
      ></button>
>>>>>>> 64897cab258c176f36be10e182860c4f988006ef
      <button
        class="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 focus:outline-none"
        @click="running = !running"
      >
        {{ running ? 'Pause' : 'Start' }}
      </button>
    </div>

    <div class="fixed top-0 w-full">
      <div
        class="pt-8 pb-16 flex flex-col items-center bg-no-repeat bg-center bg-cover shadow-inner "
        :style="{
          backgroundImage: 'url(/images/stadium.png)',
        }"
      >
        <h2 v-if="minutes < 90" class="text-6xl tracking-wide">
          {{ minutes | twoCharClock }}:{{ extraSeconds | twoCharClock }}
        </h2>
        <h2 v-if="minutes >= 90" class="text-5xl tracking-wide">
          90:00
        </h2>
        <h3 v-if="minutes >= 90" class="-mt-1 text-lg">
          + {{ (minutes - 90) | twoCharClock }}:{{
            extraSeconds | twoCharClock
          }}
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

    <div class="mt-6 mx-4 py-5 px-6 bg-black rounded-lg shadow-lg">
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

      <div
        v-show="showBet"
        class="py-4 px-5 mb-2 last:mb-0 bg-yellow-500 rounded-lg shadow-md"
      >
        <div @click="openBet = !openBet">
          <div class="flex justify-between">
            <h3 class="font-medium">
              Wie wird dieses Spiel ausgehen?
            </h3>
            <div class="flex-shrink-0 text-sm font-medium text-gray-700">
              3 Punkte
            </div>
          </div>
          <p class="mt-1 text-gray-700">
            Wette jetzt auf das Endresultat und gewinne 3 Punkte.
          </p>
        </div>
        <div v-if="openBet">
          <div class="flex flex-wrap">
            <div class="w-1/2 mt-3 px-2">
              <input
                type="number"
                min="0"
                placeholder="Heim"
                class="w-full px-4 py-2 rounded-lg bg-yellow-100 focus:outline-none"
              />
            </div>
            <div class="w-1/2 mt-3 px-2">
              <input
                type="number"
                min="0"
                placeholder="Gast"
                class="w-full px-4 py-2 rounded-lg bg-yellow-100 focus:outline-none"
              />
            </div>
          </div>

          <div class="flex justify-end">
            <button
              class="mt-3 px-4 py-2 rounded-lg bg-black hover:bg-gray-900 focus:outline-none text-white font-bold tracking-wide"
              @click="changeVisability"
            >
              Tipp abgeben
            </button>
          </div>
        </div>
      </div>

      <div
        v-show="showPenalty"
        class="py-4 px-5 mb-2 last:mb-0 bg-yellow-500 rounded-lg shadow-md"
      >
        <div @click="openPenalty = !openPenalty">
          <div class="flex justify-between">
            <h3 class="font-medium">
              Wo wird der Ball beim Penalty in das Tor fliegen?
            </h3>
          </div>
        </div>
        <div v-if="openPenalty">
          <Penalty @clicked="onClickPenalty" />
        </div>
      </div>

      <div
        v-show="showCorner"
        class="py-4 px-5 mb-2 last:mb-0 bg-yellow-500 rounded-lg shadow-md"
      >
        <div @click="openCorner = !openCorner">
          <div class="flex justify-between">
            <h3 class="font-medium">
              Wer wird den Ball nach dem Eckstoss zuerst berühren?
            </h3>
          </div>
        </div>
        <div v-if="openCorner">
          <Corner @clicked="onClickCorner" />
        </div>
      </div>
      <Liveticker :ticker="filteredTickerEvents" />
    </div>
  </div>
</template>

<script>
import Liveticker from '@/components/Liveticker'
import Corner from '@/components/Corner'
import Penalty from '@/components/Penalty'

export default {
  components: {
    Liveticker,
    Corner,
    Penalty,
  },

  filters: {
    twoCharClock(val) {
      if (val < 10) return '0' + val
      return val
    },
  },

  data() {
    return {
      openBet: false,
      openPenalty: false,
      openCorner: false,
      showPenalty: true,
      showBet: true,
      showCorner: true,
      interval: null,
      running: false,
      seconds: 5463,
      open: false,
      goals: [
        { minute: 7, team: 'home', name: 'Guillaume Hoarau' },
        { minute: 9, team: 'home', name: 'Guillaume Hoarau' },
        { minute: 22, team: 'away', name: 'Alexander Frei' },
        { minute: 52, team: 'home', name: 'Kevin Mbabu' },
      ],
      tickerEvents: [
        {
          titel: 'Penalty gegen YB',
          minute: 71,
          text:
            'Diam senectus orci cras egestas quisque lectus est magna, congue tincidunt nullam in class sem velit.',
        },
        {
          titel: 'Wölfli hält Penalty',
          minute: 72,
          text:
            'Diam senectus orci cras egestas quisque lectus est magna, congue tincidunt nullam in class sem velit.',
        },
        {
          titel: 'Hoarau verletzt',
          minute: 73,
          text:
            'Diam senectus orci cras egestas quisque lectus est magna, congue tincidunt nullam in class sem velit.',
        },
        {
          titel: 'Ein wunderschöner Angriff',
          minute: 75,
          text:
            'Diam senectus orci cras egestas quisque lectus est magna, congue tincidunt nullam in class sem velit.',
        },
      ],
    }
  },

  computed: {
    minutes() {
      return Math.floor(this.seconds / 60)
    },
    extraSeconds() {
      return this.seconds % 60
    },

    filteredTickerEvents() {
      return this.tickerEvents
        .filter(e => e.minute <= this.minutes)
        .sort((a, b) => {
          if (a.minute > b.minute) return -1
          if (a.minute < b.minute) return 1
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
  },

  watch: {
    running(running) {
      this.startOrStopInterval(running)
    },
  },

  mounted() {
    this.startOrStopInterval(this.running)
  },

  methods: {
    sendMessage() {
      let next = this.textTicker.splice(0, 1)
      this.showTextTicker.unshift(...next)
    },
    onClickPenalty(value) {
      this.openPenalty = value
      this.showPenalty = false
    },
    onClickCorner(value) {
      this.openCorner = value
      this.showCorner = false
    },
    changeVisability() {
      this.openBet = false
      this.showBet = false
    },
    incrementTimer(seconds) {
      this.seconds += seconds
      if (this.seconds < 0) this.seconds = 0
    },
    startOrStopInterval(running) {
      if (running) {
        this.interval = setInterval(() => this.incrementTimer(2), 20)
      } else {
        clearInterval(this.interval)
      }
    },

    teamGoals(goals, teamname) {
      return goals.filter(e => e.team === teamname)
    },
  },
}
</script>

<style lang="scss" scoped></style>

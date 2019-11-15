<template>
  <div>
    <div class="absolute top-0 left-0 mt-2 ml-2 opacity-25 hover:opacity-100">
      <button
        class="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 focus:outline-none"
        @click="sendMessage"
      >
        Liveticker
      </button>
    </div>

    <div
      class="pt-8 pb-16 flex flex-col items-center bg-no-repeat bg-center bg-cover shadow-inner "
      :style="{
        backgroundImage: 'url(/images/stadium.png)',
      }"
    >
      <h2 class="text-6xl tracking-wide">75:07</h2>
    </div>

    <div
      class="w-2/3 -mt-12 mx-auto py-4 flex items-start bg-black text-yellow-100 rounded-lg shadow-lg"
    >
      <div class="flex-grow flex flex-col text-center">
        <h3 class="text-4xl">3</h3>
        <h4 class="text-lg tracking-wide">BSC YB</h4>
      </div>
      <div class="text-center">
        <h3 class="text-4xl">:</h3>
      </div>
      <div class="flex-grow flex flex-col text-center">
        <h3 class="text-4xl">1</h3>
        <h4 class="text-lg tracking-wide">FC Basel</h4>
      </div>
    </div>

    <div class="mt-6 mx-auto px-4 leading-tight">
      <div class="flex">
        <div class="w-5/12 text-sm text-gray-700 text-right">Kevin Mbabu</div>
        <div class="w-1/6 text-sm text-center font-medium">52'</div>
        <div class="w-5/12 text-sm text-gray-700"></div>
      </div>
      <div class="flex">
        <div class="w-5/12 text-sm text-gray-700 text-right"></div>
        <div class="w-1/6 text-sm text-center font-medium">22'</div>
        <div class="w-5/12 text-sm text-gray-700">Alexander Frei</div>
      </div>
      <div class="flex">
        <div class="w-5/12 text-sm text-gray-700 text-right">
          Guillaume Hoarau
        </div>
        <div class="w-1/6 text-sm text-center font-medium">9'</div>
        <div class="w-5/12 text-sm text-gray-700"></div>
      </div>
      <div class="flex">
        <div class="w-5/12 text-sm text-gray-700 text-right">
          Guillaume Hoarau
        </div>
        <div class="w-1/6 text-sm text-center font-medium">7'</div>
        <div class="w-5/12 text-sm text-gray-700"></div>
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

      <div class="py-4 px-5 mb-2 last:mb-0 bg-yellow-500 rounded-lg shadow-md">
        <div @click="open = !open">
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
        <div v-if="open">
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
            >
              Tipp abgeben
            </button>
          </div>
        </div>
      </div>
      <Liveticker :ticker="showTextTicker" />
    </div>
  </div>
</template>

<script>
import Liveticker from './Liveticker'

export default {
  components: {
    Liveticker,
  },
  data() {
    return {
      open: false,
      showTextTicker: [],
      textTicker: [
        {
          titel: 'Penalty gegen YB',
          minute: "71'",
          text:
            'Diam senectus orci cras egestas quisque lectus est magna, congue tincidunt nullam in class sem velit.',
        },
        {
          titel: 'Wölfli hält Penalty',
          minute: "72'",
          text:
            'Diam senectus orci cras egestas quisque lectus est magna, congue tincidunt nullam in class sem velit.',
        },
        {
          titel: 'Hoarau verletzt',
          minute: "73'",
          text:
            'Diam senectus orci cras egestas quisque lectus est magna, congue tincidunt nullam in class sem velit.',
        },
        {
          titel: 'Ein wunderschöner Angriff',
          minute: "75'",
          text:
            'Diam senectus orci cras egestas quisque lectus est magna, congue tincidunt nullam in class sem velit.',
        },
      ],
    }
  },

  methods: {
    sendMessage() {
      let next = this.textTicker.splice(0, 1)
      this.showTextTicker.unshift(...next)
    },
  },
}
</script>

<style lang="scss" scoped></style>

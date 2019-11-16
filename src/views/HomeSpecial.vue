<template>
  <div class="homespecial w-full bg-cover">
    <div
      class="h-screen pt-8 flex flex-col items-center bg-no-repeat bg-center bg-cover shadow-inner"
      :style="{
        backgroundImage: 'url(/images/stadion.jpg)',
      }"
    >
      <form
        id="special"
        method="post"
        class="flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        @submit="checkForm"
      >
        <div class="beerchallenge mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="litres"
            >Wie viele Liter Bier werden am heutigen Spieltag im Stadion
            verkauft?</label
          >
          <input
            id="litres"
            v-model="litres"
            type="number"
            min="0"
            name="litres"
            class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 w-full block appearance-none leading-normal"
          />
        </div>
        <div class="ybsausagechallenge mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="ybsausages"
            >Wie viele YB Würste werden heute im Stadion verkauft</label
          >
          <input
            id="ybsausages"
            v-model="ybsausages"
            type="number"
            min="0"
            name="ybsausages"
            class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          />
        </div>
        <div class="visitors">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="visitors"
            >Wie viele Zuschauer sind heute im Stadion?</label
          >
          <input
            id="visitors"
            v-model="visitors"
            type="number"
            min="0"
            name="visitors"
            class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          />
        </div>
        <br />
        <div class="items-center">
          <router-link to="/">
            <button
              class="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Absenden
            </button>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSpecial',
  data: function() {
    return {
      errors: [],
      litres: null,
      ybsausages: null,
      visitors: null,
    }
  },
  methods: {
    checkForm: function(e) {
      if (this.litres && this.ybsausages && this.visitors) {
        return true
      }

      this.errors = []

      if (!this.litres) {
        this.errors.push('Liter Bier muss ausgefüllt werden.')
      }
      if (!this.ybsausages) {
        this.errors.push('Anzahl YB Würste muss ausgefüllt werden.')
      }
      if (!this.visitors) {
        this.errors.push('Anzahl Zuschaues muss ausgefüllt werden.')
      }

      e.preventDefault()

      console.log('liter ' + this.litres)
    },
  },
}
</script>

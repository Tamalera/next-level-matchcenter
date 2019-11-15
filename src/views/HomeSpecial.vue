<template>
  <div class="homespecial w-full">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="beerchallenge mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="litresbeer"
          >Wie viele Liter Bier werden am heutigen Spieltag im Stadion
          verkauft?</label
        >
        <input
          id="litresbeer"
          v-model="litres"
          class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
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
          class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        />
      </div>
      <div class="visitors">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="visitors"
          >Wie viele Zuschauer sind heute im Stadion?</label
        >
        <input
          id="visitors"
          v-model="visitors"
          class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        />
      </div>
      <br />
      <div class="items-center">
        <button
          class="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Absenden
        </button>
      </div>
    </form>
  </div>
</template>

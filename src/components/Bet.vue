<template>
  <div class="py-4 px-5 mb-2 last:mb-0 bg-yellow-500 rounded-lg shadow-md">
    <div class="cursor-pointer" @click="$emit('click')">
      <div class="flex justify-between">
        <h3 class="font-medium">
          {{ event.title }}
        </h3>
        <div class="flex-shrink-0 ml-4 text-sm font-medium text-gray-700">
          {{ event.points }} Punkte
        </div>
      </div>
      <p class="mt-1 text-gray-700">
        {{ event.text }}
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
          @click="$emit('submit')"
        >
          Tipp abgeben
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true,
    },
    open: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

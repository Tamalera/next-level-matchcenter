<template>
  <div>
    <div v-for="(event, i) in filteredEvents" :key="i" class="mb-2 last:mb-0">
      <div v-if="event.type === 'info'" class="py-2">
        <div class="flex justify-between">
          <h3 class="font-medium">
            {{ event.title }}
          </h3>
          <div class="flex-shrink-0 ml-4 text-sm font-medium text-gray-700">
            {{ event.minute }}'
          </div>
        </div>
        <p class="mt-1 text-gray-700">
          {{ event.text }}
        </p>
      </div>

      <Bet
        v-else-if="event.type === 'bet' && event.betType === 'result'"
        :event="event"
        :open="open === i"
        @click="setOpen(i)"
        @submit="hiddenEventIds.push(event.id)"
      />

      <div
        v-else-if="event.type === 'bet' && event.betType === 'penalty'"
        class="py-4 px-5 bg-yellow-500 rounded-lg shadow-md"
      >
        <div class="cursor-pointer" @click="setOpen(i)">
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
        <div v-if="open === i">
          <Penalty @clicked="hiddenEventIds.push(event.id)" />
        </div>
      </div>

      <div
        v-else-if="event.type === 'bet' && event.betType === 'corner'"
        class="py-4 px-5 bg-yellow-500 rounded-lg shadow-md"
      >
        <div class="cursor-pointer" @click="setOpen(i)">
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
        <div v-if="open === i">
          <Corner @clicked="hiddenEventIds.push(event.id)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bet from '@/components/Bet'
import Corner from '@/components/Corner'
import Penalty from '@/components/Penalty'

export default {
  components: {
    Bet,
    Corner,
    Penalty,
  },

  props: {
    events: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      open: null,
      hiddenEventIds: [],
    }
  },

  computed: {
    filteredEvents() {
      return this.events.filter(e => !this.hiddenEventIds.includes(e.id))
    },
  },

  methods: {
    setOpen(i) {
      if (this.open === i) this.open = null
      else this.open = i
    },
  },
}
</script>

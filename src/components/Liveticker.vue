<template>
  <div>
    <div v-for="(n, index) in ticker" :key="index">
      <div class="py-2 mb-2 last:mb-0">
        <div class="flex justify-between">
          <h3 class="font-medium">
            {{ n.titel }}
          </h3>
          <div class="text-sm font-medium text-gray-700">{{ n.minute }}'</div>
        </div>
        <p class="mt-1 text-gray-700">
          {{ n.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ticker: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

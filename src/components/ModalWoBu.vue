/* Following: https://laravel-news.com/building-a-modal-with-vue-and-tailwind */
<template>
  <Transition name="fade">
    <div
      v-if="showing"
      class="fixed inset-0 w-full h-screen flex items-center justify-center bg-semi-75"
    >
      <div class="relative w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
        <slot />
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  props: {
    showing: {
      required: true,
      type: Boolean,
    },
  },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

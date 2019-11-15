<template>
  <div class="px-2">
    FASHION CORNER
    <div class="flex flex-wrap sm:inline-flex md:block lg:hidden xl:flex -mx-2">
      <div
        v-for="(n, index) in 30"
        :key="index"
        class="w-1/6 p-2 rounded overflow-hidden shadow-lg"
        @click="exampleModalShowing = true"
      >
        <img
          class="w-full"
          src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
          alt="image"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">SpielerName {{ index }}</div>
        </div>
      </div>
    </div>
    <!--Modal-->
    <Modal :showing="exampleModalShowing" @close="exampleModalShowing = false">
      <h2 class="text-xl font-bold text-gray-900">Spieler</h2>
      <p class="mb-6">
        Fakten zum Speiler
      </p>
      <button
        class="bg-blue-600 text-white px-4 py-2 text-sm uppercase tracking-wide font-bold rounded-lg"
        @click="exampleModalShowing = false"
      >
        Close
      </button>
    </Modal>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue'

export default {
  name: 'FashionCorner',
  components: {
    Modal,
  },
  data: function() {
    return {
      exampleModalShowing: false,
    }
  },
}
</script>

<style scoped lang="scss"></style>

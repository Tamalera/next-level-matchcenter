<template>
  <div class="relative h-full">
    <div class="absolute w-full">
      <img src="../assets/fussball_tor.svg" alt="Fussball Tor" class="w-full" />
    </div>
    <div class="absolute w-full abstand-oben">
      <div class="flex flex-wrap justify-content abstand-rand">
        <div
          v-for="index in 6"
          :key="index"
          class="w-1/5 abstand-ball"
          @click="exampleModalShowing = true"
        >
          <img src="../assets/fussball.svg" alt="Fussball" class="mx-auto" />
        </div>
      </div>
    </div>
    <!--Modal-->
    <Modal :showing="exampleModalShowing" @close="exampleModalShowing = false">
      <h2 class="text-xl font-bold text-gray-900">Ecken</h2>
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

<style scoped lang="scss">
.abstand-oben {
  margin-top: 5rem;
  @media only screen and (min-width: 450px) {
    margin-top: 7rem;
  }
  @media only screen and (min-width: 550px) {
    margin-top: 9rem;
  }
  @media only screen and (min-width: 700px) {
    margin-top: 11rem;
  }
  @media only screen and (min-width: 850px) {
    margin-top: 16rem;
  }
  @media only screen and (min-width: 1200px) {
    margin-top: 18rem;
  }
  @media only screen and (min-width: 1400px) {
    margin-top: 22rem;
  }
}

.abstand-rand {
  margin: 0 13% 0 13%;
}

.abstand-ball {
  margin: 1.5rem 6.5% 1.5rem 6.5%;
  @media only screen and (min-width: 450px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  @media only screen and (min-width: 550px) {
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
  }
  @media only screen and (min-width: 700px) {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
  @media only screen and (min-width: 850px) {
    margin-top: 3.5rem;
    margin-bottom: 3.5rem;
  }
  @media only screen and (min-width: 1200px) {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
  @media only screen and (min-width: 1400px) {
    margin-top: 4.5rem;
    margin-bottom: 4.5rem;
  }
}
</style>

<script>
import Modal from '@/components/Modal.vue'

export default {
  name: 'Penalty',
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

<template>
  <div class="relative h-full">
    <div class="absolute w-full">
      <img src="../assets/fussball_tor.svg" alt="Fussball Tor" class="w-full" />
    </div>
    <div class="absolute w-full abstand-oben">
      <div class="flex flex-wrap justify-content abstand-rand">
        <div
          v-for="(n, index) in 6"
          :key="index"
          class="w-1/5 abstand-ball"
          @click="showPlayerDetail(index)"
        >
          <img src="../assets/fussball.svg" alt="Fussball" class="mx-auto" />
        </div>
      </div>
    </div>
    <!--Modal-->
    <ModalWoBu :showing="exampleModalShowing">
      <h2 class="text-xl font-bold text-gray-900">
        Ecke {{ indexCorner + 1 }}
      </h2>
      <div class="flex flex-wrap -mx-1">
        <p>{{ message }}</p>
      </div>
    </ModalWoBu>
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
import ModalWoBu from '@/components/ModalWoBu.vue'

export default {
  name: 'FashionCorner',
  components: {
    ModalWoBu,
  },
  data: function() {
    return {
      exampleModalShowing: false,
      message: '',
      indexCorner: 0,
    }
  },
  methods: {
    showPlayerDetail: function(index) {
      this.exampleModalShowing = true
      this.indexCorner += index
      if (index == 3) {
        this.message = 'Gratulation, du hesch dr richtig Ort gwäuut!!'
      } else {
        this.message = 'Schad, ni ganz richtig'
      }
      setTimeout(() => {
        this.exampleModalShowing = false
        this.$router.push('/match')
      }, 4000)
    },
  },
}
</script>

<template>
  <div class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <div
        v-for="(player, index) in players"
        :key="index"
        class="my-1 px-1 w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
        @click="rightPlayer(index)"
      >
        <img class="w-full" :src="player.foto" alt="image" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ player.name }}</div>
        </div>
      </div>
    </div>
    <!--Modal-->
    <ModalWoBu :showing="exampleModalShowing">
      <h2 class="text-xl font-bold text-gray-900">{{ content.name }}</h2>
      <div class="flex flex-wrap -mx-1">
        <p>{{ message }}</p>
      </div>
    </ModalWoBu>
  </div>
</template>

<script>
import ModalWoBu from '@/components/ModalWoBu.vue'
import playerData from '../json/playerDummyData.json'
import playerList from '../json/playerList.json'

export default {
  name: 'FashionCorner',
  components: {
    ModalWoBu,
  },
  data: function() {
    return {
      players: playerList.players,
      exampleModalShowing: false,
      content: {},
      message: '',
    }
  },
  methods: {
    rightPlayer: function(index) {
      this.content = playerData.allPlayers[index].content
      this.exampleModalShowing = true
      if (index == 3) {
        this.message = 'Gratulation, du hesch dr richtig Spiler gwäuut!!'
      } else {
        this.message = 'Schad, ni ganz richtig'
      }
      setTimeout(() => {
        this.exampleModalShowing = false
        this.$router.push('/')
      }, 4000)
    },
  },
}
</script>

<style scoped lang="scss"></style>

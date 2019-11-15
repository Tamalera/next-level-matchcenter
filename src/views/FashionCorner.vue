<template>
  <div class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <div
        v-for="(player, index) in players"
        :key="index"
        class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
        @click="showPlayerDetail(index)"
      >
        <img class="w-full" :src="player.foto" alt="image" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ player.name }}</div>
        </div>
      </div>
    </div>
    <!--Modal-->
    <Modal :showing="exampleModalShowing" @close="exampleModalShowing = false">
      <h2 class="text-xl font-bold text-gray-900">{{ content.name }}</h2>
      <div class="flex flex-wrap -mx-1">
        <img class="w-1/4 h-full" :src="content.bild" alt="Foto" />
        <ul
          class="list-none sm:list-disc md:list-decimal lg:list-disc xl:list-none"
        >
          <li>Geburtstag: {{ content.geburtsTag }}</li>
          <li>Grösse: {{ content.groesse }}</li>
          <li>Position: {{ content.position }}</li>
          <li>Trikotnummer: {{ content.trikot }}</li>
          <li>Sponsor: {{ content.sponsor }}</li>
          <li>Motto: {{ content.motto }}</li>
        </ul>
        <div class="flex flex-wrap -mx-1">
          <img class="w-1/3 h-full" :src="content.trikotPic" alt="Auto" />
          <img class="w-1/3 h-full" :src="content.auto" alt="Schuhe" />
          <img class="w-1/3 h-full" :src="content.schuhe" alt="Trikot" />
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue'
import playerData from '../json/playerDummyData.json'
import playerList from '../json/playerList.json'

export default {
  name: 'FashionCorner',
  components: {
    Modal,
  },
  data: function() {
    return {
      players: playerList.players,
      exampleModalShowing: false,
      content: {},
    }
  },
  methods: {
    showPlayerDetail: function(index) {
      this.content = playerData.allPlayers[index].content
      this.exampleModalShowing = true
    },
  },
}
</script>

<style scoped lang="scss"></style>

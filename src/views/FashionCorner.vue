<template>
  <div class="container my-12 mx-auto px-4 md:px-12 pb-16">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <div
        v-for="(player, index) in players"
        :key="index"
        class="my-1 px-1 w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
      >
        <img
          class="w-full"
          :src="player.foto"
          alt="image"
          @click="showPlayerDetail(index)"
        />
        <div class="flex content-between flex-wrap">
          <div class="font-bold ml-1">{{ player.name }}</div>
          <div class="mx-12"></div>
          <div @click="changeColor(index)">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              height="55"
              width="55"
            >
              <polygon
                :style="[
                  favorite[index]
                    ? { fill: activeColor }
                    : { fill: inactiveColor },
                ]"
                points="20 18 25 30 40 30 30 40 35 50 20 45 5 50 10 40 0 30 15 30"
              />
            </svg>
          </div>
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
      favorite: [],
      activeColor: '#0f0',
      inactiveColor: '#00f',
    }
  },
  created() {
    this.players.forEach(() => this.favorite.push(false))
  },
  methods: {
    showPlayerDetail: function(index) {
      this.content = playerData.allPlayers[index].content
      this.exampleModalShowing = true
    },
    changeColor: function(index) {
      this.favorite[index] = !this.favorite[index]
      let temp = this.activeColor
      this.activeColor = this.inactiveColor
      this.inactiveColor = temp
      temp = ''
      temp = this.activeColor
      this.activeColor = this.inactiveColor
      this.inactiveColor = temp
      temp = ''
    },
  },
}
</script>

<style scoped lang="scss"></style>

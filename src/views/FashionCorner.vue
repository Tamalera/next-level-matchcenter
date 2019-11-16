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
        <div class="flex flex-col">
          <div class="font-bold ml-1">{{ player.name }}</div>
          <div class="self-center" @click="changeColor(index)">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              width="40"
            >
              <polygon
                :style="[
                  favorites[index]
                    ? { fill: activeColor }
                    : { fill: inactiveColor },
                ]"
                points="20 0 25 12 40 12 30 22 35 32 20 27 5 32 10 22 0 12 15 12"
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
      activeColor: '#ffcf00',
      inactiveColor: '#000',
    }
  },

  computed: {
    favorites() {
      return this.$store.state.fashionCorner.favorites
    },
  },

  created() {
    this.players.forEach(() => this.favorites.push(false))
  },

  methods: {
    showPlayerDetail: function(index) {
      this.content = playerData.allPlayers[index].content
      this.exampleModalShowing = true
    },
    changeColor: function(index) {
      this.favorites[index] = !this.favorites[index]
      if (this.favorites[index])
        this.$store.commit('fashionCorner/ADD_FAVORITE', index)
      else this.$store.commit('fashionCorner/REMOVE_FAVORITE', index)

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

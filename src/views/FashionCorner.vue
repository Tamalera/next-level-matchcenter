<template>
  <div class="container mt-8 mb-16 mx-auto px-4">
    <div class="w-full flex flex-wrap justify-around">
      <div
        v-for="(player, index) in players"
        :key="index"
        class="mb-6 w-5/12 lg:mb-8 lg:px-4 lg:w-1/3 rounded-lg shadow-lg overflow-hidden"
      >
        <img
          class="w-full"
          :src="player.foto"
          alt="image"
          @click="showPlayerDetail(index)"
        />
        <div class="flex justify-between py-2 px-3">
          <div class="font-bold ml-1">{{ player.name }}</div>
          <div class="mt-1 ml-2 mr-1" @click="changeColor(index)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              class="transition fill-current w-6"
              :class="{
                'text-black': !favorites.includes(index),
                'text-yellow-500': favorites.includes(index),
              }"
            >
              <path
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <!--Modal-->
    <Modal :showing="exampleModalShowing" @close="exampleModalShowing = false">
      <h2 class="text-xl font-medium text-gray-900 tracking-wide">
        {{ content.name }}
      </h2>
      <div class="mt-2 flex flex-wrap items-start">
        <img class="w-1/4 pt-1 pr-4" :src="content.bild" alt="Foto" />
        <div class="w-3/4">
          <div class="">
            <span class="text-sm text-gray-700 leading-tight">Geburtstag:</span>
            {{ content.geburtsTag }}
          </div>
          <div class="">
            <span class="text-sm text-gray-700 leading-tight">Grösse:</span>
            {{ content.groesse }}
          </div>
          <div class="">
            <span class="text-sm text-gray-700 leading-tight">Position:</span>
            {{ content.position }}
          </div>
          <div class="">
            <span class="text-sm text-gray-700 leading-tight">
              Trikotnummer:
            </span>
            {{ content.trikot }}
          </div>
          <div class="">
            <span class="text-sm text-gray-700 leading-tight">Sponsor:</span>
            {{ content.sponsor }}
          </div>
          <div class="">
            <span class="text-sm text-gray-700 leading-tight">Motto:</span>
            {{ content.motto }}
          </div>
        </div>
        <div class="mt-3 -mx-1 flex flex-wrap items-start">
          <img class="w-1/3 pr-1" :src="content.trikotPic" alt="Auto" />
          <img class="w-1/3 pr-1" :src="content.auto" alt="Schuhe" />
          <img class="w-1/3" :src="content.schuhe" alt="Trikot" />
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
  data() {
    return {
      players: playerList.players,
      exampleModalShowing: false,
      content: {},
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
    },
  },
}
</script>

<style scoped lang="scss"></style>

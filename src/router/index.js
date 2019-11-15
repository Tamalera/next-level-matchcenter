import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeSpecial from '../views/HomeSpecial.vue'
import MiniGames from '../views/MiniGames.vue'
import FashionCorner from '../views/FashionCorner.vue'
import Bet from '../views/Bet.vue'
import Match from '../views/Match.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'match',
    component: Match,
  },
  {
    path: '/fashion-corner',
    name: 'fashionCorner',
    component: FashionCorner,
  },
  {
    path: '/homespecial',
    name: 'homespecial',
    component: HomeSpecial,
  },
  {
    path: '/mini-games',
    name: 'miniGames',
    component: MiniGames,
  },
  {
    path: '/bet',
    name: 'bet',
    component: Bet,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router

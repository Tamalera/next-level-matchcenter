import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeSpecial from '../views/HomeSpecial.vue'
import FashionCorner from '../views/FashionCorner.vue'
import Bet from '../views/Bet.vue'
import Match from '../views/Match.vue'
import User from '../views/User.vue'

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
    path: '/bet',
    name: 'bet',
    component: Bet,
  },
  {
    path: '/user',
    name: 'user',
    component: User,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router

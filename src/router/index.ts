import { createRouter, createWebHistory } from 'vue-router'
import Music from '../pages/Music/index.vue'
import PlayList from '../pages/PlayList/index.vue'

const routes = [
  {
    path: "/music-library",
    component: Music
  },
  {
    path: "/playlist",
    component: PlayList
  }
]

export default createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active"
})

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Homepage from '../views/Homepage.vue';
// import Catalogue from '../views/Catalogue.vue';
// import Rules from '../views/Rules.vue'; 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage
    }
    // {
    //   path: '/catalogue',
    //   name: 'catalogue',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: Catalogue
    // },
    // {
    //   path: '/rules',
    //   name: 'rules',
    //   component: Rules
    // }
  ]
})

export default router

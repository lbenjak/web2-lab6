import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Catalogue from '../views/CatalogueView.vue';
import Rules from '../views/RulesView.vue'; 
import NotFound from "../views/NotFound.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/catalogue',
      name: 'catalogue',
      component: Catalogue
    },
    {
      path: '/rules',
      name: 'rules',
      component: Rules
    },
    {
      path: '/:catchAll(.*)',
      name: 'notfound',
      component: NotFound,
    },
  ]
})

export default router

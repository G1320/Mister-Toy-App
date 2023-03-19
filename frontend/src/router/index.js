import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import Chart from '../views/Chart.vue';
import ToyIndex from '../views/ToyIndex.vue';
import ToyEdit from '../views/ToyEdit.vue';
import ToyDetails from '../views/ToyDetails.vue';
import SearchPage from '../views/SearchPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ToyIndex,
    },
    {
      path: '/toys',
      name: 'toys',
      component: ToyIndex,
    },
    {
      path: '/chart',
      name: 'chart',
      component: Chart,
    },
    {
      path: '/toys/search',
      name: 'search',
      component: SearchPage,
    },
    {
      path: '/toys/edit/:toyId?',
      name: 'edit',
      component: ToyEdit,
    },
    {
      path: '/toys/details/:toyId?',
      name: 'details',
      component: ToyDetails,
    },
  ],
});

export default router;

<template>
  <section class="main-content">
    <Logo />
    <AppHeader />
    <main-nav></main-nav>

    <BarChart :chartData="testData" :options="options" />
  </section>
</template>

<script lang="ts">
import { BarChart } from 'vue-chart-3';
import { Chart, registerables } from 'chart.js';
import MainNav from '../cmps/MainNav.vue';
import AppHeader from '../cmps/AppHeader.vue';
import Logo from '../cmps/Logo.vue';

Chart.register(...registerables);

export default {
  name: 'Chart',
  components: { BarChart, MainNav, AppHeader, Logo },
  data() {
    return {
      options: {
        plugins: {
          legend: { display: false },
          // legend: { position: 'bottom' },
        },
      },
    };
  },
  computed: {
    toys() {
      return this.$store.getters.toysToDisplay;
    },
    testData() {
      return {
        labels: ['Tel-Aviv', 'Avg Price', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
        datasets: [
          {
            data: [100, this.getToysAvgPrice, 40, 60, 70, 5],
            backgroundColor: ['darkseagreen', 'orange', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
          },
        ],
      };
    },
    getToysAvgPrice() {
      let sum = 0;
      // const toys = { ...this.toys };
      this.toys.forEach((toy) => (sum += toy.price));
      return sum / this.toys.length;
    },
  },

  methods: {},
};
</script>

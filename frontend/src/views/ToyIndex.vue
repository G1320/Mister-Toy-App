<template>
  <section class="main-content">
    <Logo />
    <AppHeader />

    <main-nav></main-nav>

    <main class="toys-app">
      <ToyList v-if="toys" :toys="toys" @removed="removeToy" :class="'toy-list'" />
    </main>
  </section>
</template>

<script>
import AppHeader from '../cmps/AppHeader.vue';
import Logo from '../cmps/Logo.vue';

import MainNav from '../cmps/MainNav.vue';
import ToyList from '../cmps/ToyList.vue';
import ToyFilter from '../cmps/ToysFilter.vue';
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js';
export default {
  name: 'ToyIndex',
  methods: {
    data() {
      return {};
    },
    async removeToy(toyId) {
      try {
        await this.$store.dispatch({ type: 'removeToy', toyId });
        showSuccessMsg('toy removed');
      } catch (err) {
        showErrorMsg('Cannot remove toy');
      }
    },
  },
  computed: {
    toys() {
      return this.$store.getters.toysToDisplay;
    },
    methods: {},
  },
  components: {
    ToyList,
    ToyFilter,
    MainNav,
    AppHeader,
    Logo,
  },
};
</script>

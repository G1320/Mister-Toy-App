<template>
  <section class="main-content">
    <Logo />
    <AppHeader />
    <!-- <ToyFilter @setFilter="setFilter" /> -->
    <main-nav></main-nav>
    <GenreList v-if="toys" :toys="toys" :class="'genre-list'" />
  </section>
</template>

<script>
import ToyFilter from '../cmps/ToysFilter.vue';
import GenreList from '../cmps/GenreList.vue';
import MainNav from '../cmps/MainNav.vue';
import AppHeader from '../cmps/AppHeader.vue';
import Logo from '../cmps/Logo.vue';
export default {
  name: 'SearchPage',
  data() {
    return {};
  },
  methods: {
    setFilter(filterBy) {
      this.$store.dispatch({ type: 'loadToys', filterBy });
    },
  },
  computed: {
    toys() {
      return this.$store.getters.toysToDisplay;
    },
  },
  created() {},
  components: {
    ToyFilter,
    GenreList,
    MainNav,
    AppHeader,
    Logo,
  },
};
</script>

<style></style>

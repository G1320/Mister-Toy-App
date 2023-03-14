<template>
  <header>
    <div class="main-header">
      <h1>Header</h1>
      <nav class="main-van">
        <router-link to="/">Home</router-link> | <router-link to="/toys">Our Toys</router-link> |
        <router-link to="/chart">Chart</router-link>
        |
      </nav>
    </div>
    <ToyFilter @setFilter="setFilter" />
  </header>
</template>

<script>
import ToyFilter from '../cmps/ToysFilter.vue';

export default {
  name: 'AppHeader',
  data() {
    return {};
  },
  methods: {
    setFilter(filterBy) {
      this.$store.dispatch({ type: 'loadToys', filterBy });
    },
  },
  computed: {
    isSearchShown() {
      // return this.$store.getters.isSearchShown;
    },
  },
  created() {},
  components: {
    ToyFilter,
  },
};
</script>

<style></style>

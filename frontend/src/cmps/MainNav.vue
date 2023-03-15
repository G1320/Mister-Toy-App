<template>
  <section class="main-nav">
    <h1>Header</h1>

    <!-- <router-link to="/">Home</router-link> -->
    <router-link to="/toys">Home</router-link>
    <RouterLink to="/toys/search/">Search</RouterLink>
    <router-link to="/chart">Chart</router-link>

    <i>Hello</i>
    <i>Hello</i>
    <i>Hello</i>
    <i>Hello</i>
    <i>Hello</i>
    <i>Hello</i>
    <i>Hello</i>
    <i>Hello</i>
  </section>
</template>

<script>
export default {
  name: 'MainNav',
  data() {
    return {
      isSearchShown: false,
    };
  },
  methods: {
    setFilter(filterBy) {
      this.$store.dispatch({ type: 'loadToys', filterBy });
    },
  },
  computed: {},
  created() {},
  components: {},
};
</script>

<style></style>

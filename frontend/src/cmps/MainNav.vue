<template>
  <section class="main-nav">
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
    return {};
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

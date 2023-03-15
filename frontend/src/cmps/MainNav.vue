<template>
  <section class="main-nav">
    <router-link @click="$store.commit({ type: 'toggleFilterShown', isFilterShown: false })" to="/toys"
      >Home</router-link
    >

    <RouterLink
      @click="$store.commit({ type: 'toggleFilterShown', isFilterShown: true })"
      to="/toys/search/"
      >Search</RouterLink
    >

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

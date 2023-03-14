<template>
  <section class="main-nav">
    <i>Hello</i>
    <i>Hello</i>
    <i>Hello</i>
    <RouterLink to="/toys/search/">Search</RouterLink>

    <i>Hello</i>
    <i>Hello</i>
    <i>Hello</i>
    <i>Hello</i>
    <i>Hello</i>
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

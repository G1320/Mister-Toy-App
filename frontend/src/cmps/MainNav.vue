<template>
  <section class="main-nav">
    <i>Hello</i>
    <i>Hello</i>
    <i>Hello</i>
    <ToyFilter @setFilter="setFilter" />

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
import ToyFilter from '../cmps/ToysFilter.vue';

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
  components: {
    ToyFilter,
  },
};
</script>

<style></style>

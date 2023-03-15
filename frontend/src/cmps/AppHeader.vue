<template>
  <header>
    <div class="main-header">
      <ToyFilter @setFilter="setFilter" />
      <section class="user-info">
        <RouterLink to="/user">User Area</RouterLink>
      </section>
    </div>
  </header>
</template>

<script>
import ToyFilter from '../cmps/ToysFilter.vue';

export default {
  name: 'AppHeader',
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

<template>
  <header>
    <div class="main-header">
      <ToyFilter v-if="isFilterShown.isFilterShown" @setFilter="setFilter" />
      <div v-else class="prev-next-btn-wrapper">
        <button class="prev">Prev</button>
        <button class="next">Next</button>
      </div>
      <RouterLink to="/chart">User Area</RouterLink>
    </div>
  </header>
</template>

<script>
import ToyFilter from '../cmps/ToysFilter.vue';

export default {
  name: 'AppHeader',
  data() {
    return {
      // isSearchShown: false,
    };
  },
  methods: {
    setFilter(filterBy) {
      this.$store.dispatch({ type: 'loadToys', filterBy });
    },
  },
  computed: {
    isFilterShown() {
      return this.$store.getters.isFilterShown;
    },
  },
  created() {},
  components: {
    ToyFilter,
  },
};
</script>

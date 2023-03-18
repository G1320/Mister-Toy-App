<template>
  <ul v-if="toys.length" class="clean-list genre-list">
    <GenrePreview v-for="label in labels" :key="label" :label="label" :value="label" />
    <h1>{{ label }}</h1>
  </ul>
  <p v-else>No toys to show..</p>
</template>

<script>
import GenrePreview from './GenrePreview.vue';

export default {
  name: 'GenreList',
  props: {
    toys: Array,
    required: true,
    default: [],
  },
  components: {
    GenrePreview,
  },
  methods: {},
  computed: {
    labels() {
      return this.$store.getters.labels;
    },
  },
};
</script>

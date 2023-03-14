<template>
  <ul v-if="toys.length" class="clean-list genre-list">
    <GenrePreview v-for="toy in toys" :key="toy._id" :toy="toy" :class="'genre-preview'" />
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
};
</script>

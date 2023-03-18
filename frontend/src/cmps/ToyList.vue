<template>
  <ul v-if="toys.length" class="clean-list toy-list">
    <article class="toy-list-top-content-container">
      <h1>button</h1>
      <h1>button</h1>
      <h1>button</h1>
      <h1>button</h1>
      <h1>button</h1>
      <h1>button</h1>
    </article>
    <ToyPreview
      v-for="toy in toys"
      :key="toy._id"
      :toy="toy"
      @removed="$emit('removed', toy._id)"
      :class="'toy-preview'"
    />
  </ul>
  <p v-else>No toys to show..</p>
</template>

<script>
import ToyPreview from './ToyPreview.vue';

export default {
  name: 'ToyList',
  props: {
    toys: Array,
    required: true,
    default: [],
  },
  components: {
    ToyPreview,
  },
  methods: {
    setFilter(label) {
      this.filterBy.labels = [label];
      console.log('label: ', label);
      this.$emit('setFilter', { ...this.filterBy });
    },
  },
  computed: {
    labels() {
      return this.$store.getters.labels;
    },
  },
};
</script>

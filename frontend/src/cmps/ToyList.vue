<template>
  <ul v-if="toys.length" class="clean-list toy-list">
    <article class="toy-list-top-content-container">
      <h1>Our Toys</h1>
      <RouterLink class="btn btn-add" to="/toys/edit/">Add</RouterLink>
      <div>Content</div>
      <div>Content</div>
      <div>Content</div>
      <div>Content</div>
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
  methods: {},
};
</script>

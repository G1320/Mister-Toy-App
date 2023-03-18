<template>
  <section v-if="toy" class="toy-details flex flex-col items-center gap-2">
    <article>
      <p><span class="fw-bold">Name:</span> {{ toy.name }}</p>
      <p><span class="fw-bold">Price:</span> ${{ toy.price }}</p>
      <p><span class="fw-bold">Created at:</span> {{ formattedDate }}</p>
      <p><span class="fw-bold">Labels:</span> {{ getLabels }}</p>
      <p><span class="fw-bold">In stock:</span> {{ toy.inStock }}</p>
    </article>
    <button @click="goBack" class="btn btn-primary">go back</button>
  </section>
</template>

<script>
import { toyService } from '../services/toy-service.js';

export default {
  name: 'toy-detail',
  data() {
    return {
      toy: null,
    };
  },
  created() {
    const { toyId } = this.$route.params;
    toyService.getById(toyId).then((toy) => {
      this.toy = toy;
    });
  },
  methods: {
    goBack() {
      this.$router.push('/toys');
    },
  },
  computed: {
    formattedDate() {
      return new Date(this.toy.createdAt).toLocaleDateString();
    },
    getLabels() {
      return this.toy?.labels.join(', ');
    },
  },
};
</script>

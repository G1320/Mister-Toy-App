<template>
  <section v-if="toy" class="toy-details">
    <p>Toy Name: {{ toy.name }}</p>
    <p>Toy Price: {{ toy.price }}</p>
    <p>Toy ID: {{ toy._id }}</p>
  </section>
</template>

<script>
import { toyService } from '../services/toy-service.js';
export default {
  created() {
    const { toyId } = this.$route.params;
    toyService.getById(toyId).then((toy) => (this.toy = toy));
  },

  data() {
    name: 'ToyDetails';
    return {
      toy: null,
    };
  },
};
</script>

<template>
  <li class="genre-preview">
    <img v-if="toy.imgUrl" :src="toy.imgUrl" />

    <p>Toy Name: {{ toy.name }}</p>
  </li>
</template>

<script>
export default {
  name: 'GenrePreview',
  emits: ['removed'],
  props: {
    toy: Object,
  },
};
</script>

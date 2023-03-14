<template>
  <li class="genre-preview">
    <p>Toy Name: {{ toy.name }}</p>
    <p>Toy Price: {{ toy.price }}</p>
    <p>Toy ID: {{ toy._id }}</p>
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

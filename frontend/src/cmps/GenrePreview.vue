<template>
  <li class="genre-preview">
    <RouterLink :to="'/toys/details/' + toy._id" class="btn">
      <img v-if="toy.imgUrl" :src="toy.imgUrl" />

      <p>Category {{ Math.random() < 0.5 ? toy.labels[0] : toy.labels[1] }}</p>
    </RouterLink>
  </li>
</template>

<script>
export default {
  name: 'GenrePreview',
  props: {
    toy: Object,
  },
};
</script>

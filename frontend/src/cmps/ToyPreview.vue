<template>
  <li class="toy-preview">
    <img v-if="toy.imgUrl" :src="toy.imgUrl" />

    <!-- <img v-if="'toy'" :src="'toy.imgUrl'" /> -->
    <p>Toy Name: {{ toy.name }}</p>
    <p>Toy Price: {{ toy.price }}</p>

    <div class="tools flex">
      <button @click="$emit('removed')" class="btn">
        <span>x</span>
      </button>
      <RouterLink :to="'/toys/edit/' + toy._id" class="btn">
        <span>Edit</span>
      </RouterLink>
      <RouterLink :to="'/toys/details/' + toy._id" class="btn">
        <span>Details</span>
      </RouterLink>
    </div>
  </li>
</template>

<script>
export default {
  name: 'ToyPreview',
  emits: ['removed'],
  props: {
    toy: Object,
  },
};
</script>

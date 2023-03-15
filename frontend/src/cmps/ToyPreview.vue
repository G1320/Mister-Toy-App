<template>
  <li class="toy-preview">
    <RouterLink :to="'/toys/details/' + toy._id" class="btn">
      <img v-if="toy.imgUrl" :src="toy.imgUrl" />

      <div class="detail-preview">
        <button @click="$emit('removed')" class="btn">x</button>

        <!-- <img v-if="'toy'" :src="'toy.imgUrl'" /> -->
        <div class="detail-preview-info">
          <p>{{ toy.name }}</p>
        </div>

        <div class="tools"></div>
        <RouterLink :to="'/toys/edit/' + toy._id" class="btn"> edit </RouterLink>
      </div>
    </RouterLink>
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

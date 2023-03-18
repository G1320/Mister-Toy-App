<template>
  <li class="toy-preview">
    <RouterLink :to="'/toys/details/' + toy._id" class="btn">
      <img v-if="toy.imgUrl" :src="toy.imgUrl" />

      <div class="detail-preview">
        <button @click="$emit('removed')" class="btn">x</button>
        <div class="detail-preview-info">
          <p>{{ toy.name }}</p>
        </div>

        <RouterLink :to="'/toys/edit/' + toy._id" class="btn"> edit </RouterLink>
        <div class="tools"></div>
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
  data() {
    return {
      selectedLabels: [],
      filterBy: {
        name: '',
        labels: [],
        sort: 'name',
        inStock: false,
      },
    };
  },
  methods: {
    setFilter() {
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

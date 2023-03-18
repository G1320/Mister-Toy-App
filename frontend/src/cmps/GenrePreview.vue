<template>
  <section>
    <li class="genre-preview">
      <!-- <RouterLink :to="'/toys/details/' + toy._id" class="btn"> -->
      <!-- <img v-if="label" :src="toy.imgUrl" /> -->
      <button @click="setFilter(label)">
        {{ label }}
      </button>
      <!-- <p>Category {{ Math.random() < 0.5 ? toy.labels[0] : toy.labels[1] }}</p> -->
      <!-- </RouterLink> -->
    </li>
  </section>
</template>

<script>
export default {
  name: 'GenrePreview',
  props: {
    label: String,
  },
  data() {
    return {
      selectedLabels: [],
      // filterLabel: this.label,
      filterBy: {
        name: '',
        labels: [],
        sort: 'name',
        inStock: false,
      },
    };
  },
  methods: {
    setFilter(filterBy) {
      this.filterBy.labels = [label];

      this.$store.dispatch({ type: 'loadToys', filterBy });
    },
  },
  computed: {},
};
</script>

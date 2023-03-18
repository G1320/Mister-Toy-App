<template>
  <section class="toy-filter">
    <input
      v-model="filterBy.name"
      @input="setFilter"
      type="text"
      style="width: 140px"
      class="form-input"
      placeholder="Search name..."
    />
    <el-select
      v-model="filterBy.labels"
      multiple
      placeholder="All"
      style="width: 140px"
      @change="setFilter"
    >
      <el-option v-for="label in labels" :key="label" :label="label" :value="label" />
    </el-select>
    <el-select @change="setFilter" v-model="filterBy.sort">
      <el-option value="name">name</el-option>
      <el-option value="price">price</el-option>
      <el-option value="createdAt">created</el-option>
    </el-select>
    <el-checkbox
      name="inStock"
      v-model="filterBy.inStock"
      @change="setFilter"
      label="Show only toys in stock"
      style="width: 140px"
    />
  </section>
</template>

<script>
export default {
  name: 'toy-filter',
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

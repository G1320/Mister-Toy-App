<template>
    <div class="filter">
        <section class="toy-filter flex space-between">
            <input class="input" v-model="filterBy.name" @input="setFilterName" type="text" placeholder="Search toy...">
            <div class="filter-btns flex align-center">
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            filterBy: {
                name: '',
                labels: [],
                inStock: false,
                sortBy: {},
                page: 0,
            },
        }
    },
    methods: {
        setFilterName() {
            this.$emit('setFilter', { ...this.filterBy })
        },
    },
}
</script>


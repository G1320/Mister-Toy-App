<template>
  <section @submit.prevent="saveToy" v-if="toyToEdit" class="toy-edit py-2">
    <form class="form">
      <div class="form-control">
        <label for="txt" class="form-label">Toy Name</label>
        <input
          required
          v-model="toyToEdit.name"
          id="txt"
          type="text"
          class="form-input"
          placeholder="Enter your toy name here..."
        />
      </div>
      <div class="form-control">
        <label for="price" class="form-label">Toy Price</label>
        <input required v-model.number="toyToEdit.price" id="price" type="number" class="form-input" />
      </div>
      <div class="form-control">
        <el-select v-model="toyToEdit.labels" multiple placeholder="None" style="width: 240px">
          <el-option v-for="label in labels" :key="label" :label="label" :value="label" />
        </el-select>
      </div>

      <div class="form-control">
        <el-checkbox v-model="toyToEdit.inStock" label="Toy in stock?" id="inStock" class="form-input" />
      </div>
      <!-- @click="saveToy" -->
      <div class="btn-group">
        <button class="btn btn-info">save</button>
        <button @click="goBack" class="btn btn-danger-text">go back</button>
      </div>
    </form>
  </section>
</template>

<script>
import { toyService } from '../services/toy-service';

export default {
  name: 'toy-edit',
  data() {
    return {
      toyToEdit: null,
    };
  },
  created() {
    const { toyId } = this.$route.params;
    if (toyId) {
      console.log('toyId: ', toyId);
      toyService.getById(toyId).then((toy) => {
        this.toyToEdit = toy;
      });
    } else this.toyToEdit = toyService.getEmptyToy();
  },
  methods: {
    goBack() {
      this.$router.push('/toys');
    },
    saveToy() {
      this.$store.dispatch({ type: 'saveToy', toy: this.toyToEdit }).then(() => {
        this.$router.push('/toys');
      });
    },
  },
  computed: {
    labels() {
      return this.$store.getters.labels;
    },
  },
};
</script>

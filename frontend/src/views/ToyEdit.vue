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
  async created() {
    const { toyId } = this.$route.params;
    if (toyId) {
      console.log('toyId: ', toyId);
      try {
        const toy = await toyService.getById(toyId);
        this.toyToEdit = toy;
      } catch (error) {
        console.log('Error fetching toy: ', error);
      }
    } else {
      this.toyToEdit = toyService.getEmptyToy();
    }
  },
  methods: {
    goBack() {
      this.$router.push('/toys');
    },
    async saveToy() {
      try {
        await this.$store.dispatch({ type: 'saveToy', toy: this.toyToEdit });
        this.$router.push('/toys');
      } catch (error) {
        console.log('Error saving toy: ', error);
      }
    },
  },
};
</script>

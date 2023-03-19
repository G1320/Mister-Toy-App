import { toyService } from '../../services/toy-service.js';

export const toyStore = {
  state: {
    isFilterShown: false,
    filterBy: {
      labels: [],
      sort: 'name',
      inStock: false,
    },
    toys: null,
    labels: [
      'Science',
      'Remote controlled',
      'Doll',
      'Indie',
      'Battery powered',
      'Collectable',
      'Rare',
      'Artsy',
      'Challenging',
      'Require practice',
      'Indulgent',
      'Impractical',
    ],
  },
  getters: {
    toysToDisplay({ toys }) {
      return toys;
    },
    labels(state) {
      return state.labels;
    },
    isFilterShown({ isFilterShown }) {
      return isFilterShown;
    },
  },
  mutations: {
    setToys(state, { toys }) {
      state.toys = toys;
    },
    removeToy(state, { toyId }) {
      const idx = state.toys.findIndex((toy) => toy._id === toyId);
      state.toys.splice(idx, 1);
    },
    addToy(state, { toy }) {
      state.toys.unshift(toy);
    },
    updateToy(state, { toy }) {
      const idx = state.toys.findIndex((t) => t._id === toy._id);
      state.toys.splice(idx, 1, toy);
    },
    setFilterBy(state, { filterBy }) {
      state.filterBy = filterBy;
    },
    toggleFilterShown(state, isFilterShown) {
      state.isFilterShown = isFilterShown;
    },
  },
  actions: {
    async loadToys({ commit }, { filterBy }) {
      try {
        const toys = await toyService.query(filterBy);
        commit({ type: 'setToys', toys });
      } catch (err) {
        console.log(err);
      }
    },
    async removeToy({ commit }, { toyId }) {
      try {
        await toyService.remove(toyId);
        commit({ type: 'removeToy', toyId });
      } catch (err) {
        console.log(err);
      }
    },
    async saveToy({ commit }, { toy }) {
      const actionType = toy._id ? 'updateToy' : 'addToy';
      try {
        const savedToy = await toyService.save(toy);
        commit({ type: actionType, toy: savedToy });
      } catch (err) {
        console.log(err);
      }
    },
  },
};

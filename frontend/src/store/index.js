import { createStore } from 'vuex'
import { toyStore } from './modules/toy.store'

export const store = createStore({
    strict: true,
    modules: {
        toyStore,
    },
})

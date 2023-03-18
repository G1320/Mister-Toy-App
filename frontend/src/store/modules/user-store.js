import userService from '../../services/user.service.js'

export default {
    state: {
        user: null,
    },
    getters: {
        getUser(state) {
            return state.user
        },
    },
    mutations: {
        setUser(state, { user }) {
            state.user = user
        },
    },
    actions: {
        loadUser({ commit }) {
            return userService.getUser().then(user => {
                commit({ type: 'setUser', user })
                return user
            })
        },
        updateUser({ commit }, { user }) {
            userService.updateUser(user).then(user => {
                commit({ type: 'setUser', user })
            })
        },
        setUserActivities(context, { txt, todo }) {
            userService.setUserActivities(txt, todo).then(user => {
                context.commit({ type: 'setUser', user })
            })
        },
    },
}

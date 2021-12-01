import axios from 'axios'

// state
export const state = {
    user: null,
    token: localStorage.getItem('token')
}

// getters
export const getters = {
    user: state => state.user,
    token: state => state.token,
    check: state => state.user !== null
}

// mutations
export const mutations = {
    setUser: (state, payload) => state.user = payload,
    setToken: (state, payload) => state.token = payload,

}

// actions
export const actions = {

    async fetchUser({ commit }) {
        try {
            const { data } = await axios.get('/api/user')

            commit('setUser', { user: data })
        } catch (e) {
            
        }
    },
}
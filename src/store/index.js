import Vue from 'vue'
import Vuex from 'vuex'

// Register Vuex
Vue.use(Vuex)

// Vuex Store
export default new Vuex.Store({
  state: {
    // Default layout options
    layout: {
      header: true,
      sidebar: true,
      sideOverlay: true,
      footer: true
    },

    // users
    users: {
      selectedUser: {}
    }
  },
  getters: {
    // get selected user
    selectedUser: (state) => {
      return state.users.selectedUser
    }
  },
  mutations: {
    // set selected user
    setSelectedUser (state, payload) {
      state.users.selectedUser = payload.user
    }
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const LAYOUTS = new Set(['rootLayout', 'rootLayout', 'rootLayout'])

export default new Vuex.Store({
  state: {
    activeLayout: {
      name: 'rootLayout'
    },

    rootLayout: {
      drawer: true,
      header: true,
      footer: true,

      drawerIsOpen: true
    },

    blogLayout: {
      drawer: true,
      header: true,
      footer: true,

      drawerIsOpen: true
    },

    palandasinLayout: {
      drawer: true,
      header: true,
      footer: true,

      drawerIsOpen: true
    }
  },

  getters: {
    layout: (state) => {
      let active = state[state.activeLayout.name]
      return active? active: null
    }
  },

  mutations: {
    setActiveLayout(state, payload) {
      if (LAYOUTS.has(payload)) {
        state.activeLayout.name = payload
      }
    },

    setlayout(state, payload) {
      if (state.activeLayout.name && state[state.activeLayout.name]) {
        state[state.activeLayout.name].drawer = Boolean(payload.drawer)
        state[state.activeLayout.name].header = Boolean(payload.header)
        state[state.activeLayout.name].footer = Boolean(payload.footer)
      }
    },

    setDrawer(state, payload) {
      state[state.activeLayout.name].drawerIsOpen = Boolean(payload)
    },

    toggleDrawer(state) {
      state[state.activeLayout.name]
        .drawerIsOpen = !state[state.activeLayout.name].drawerIsOpen
    }
  },
})

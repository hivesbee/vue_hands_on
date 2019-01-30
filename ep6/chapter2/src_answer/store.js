import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: []
  },
  mutations: {
    addContact (state, payload) {
      state.contacts.push(payload)
    },
    removeContact (state, payload) {
      state.contacts.splice(payload, 1)
    }
  },
  actions: {
    addContact ({ commit }, payload) {
      commit('addContact', payload)
    },
    removeContact ({ commit }, payload) {
      commit('removeContact', payload)
    }
  }
})

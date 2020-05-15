const state = () => ({
  params: {}
})

const getters = {
  getParams(state) {
    return state.params
  }
}

const mutations = {
  setParams(state, params) {
    state.params = params
  },
  clearParams(state) {
    state.params = {}
  }
}

const actions = {
  setParams({ commit }, params) {
    commit('setParams', params)
  },
  clearParams({ commit }) {
    commit('clearParams')
  }
}

export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations
}

import Vue from 'vue'
import Vuex from 'vuex'
import index from '~/store/modules/index'
import message from '~/store/modules/message'
import params from '~/store/modules/params'
import { actions, mutations, state, getters } from '~/store/modules/index'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    message,
    params
  },
  state: state(),
  getters: getters,
  mutations: mutations,
  actions: actions,
  ict: debug,
})

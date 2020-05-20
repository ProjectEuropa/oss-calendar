import Vue from 'vue'
import Vuex from 'vuex'
import message from '~/store/modules/message'
import params from '~/store/modules/params'
import index from '~/store/modules/index'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    index,
    message,
    params
  },
  ict: debug,
})

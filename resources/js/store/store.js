import Vue from 'vue'
import Vuex from 'vuex'
import Index from '~/store/modules/index'
import Message from '~/store/modules/message'
import Params from '~/store/modules/params'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    Index,
    Message,
    Params
  },
  strict: debug,
})

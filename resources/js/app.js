import Vue from "vue";
import router from './router'
import App from './layouts/default'
import ctx from './plugin/vuetify'

Vue.use(ctx)

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')

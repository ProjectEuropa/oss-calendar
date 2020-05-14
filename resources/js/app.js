import Vue from "vue";
import router from '~/router'
import App from '~/App.vue'
import vuetify from '~/plugin/vuetify'
import AuthPlugin from '~/plugin/auth'
import DefaultLayout from '~/layouts/default';
import NoAuthLayout from '~/layouts/noauth';
import store from '~/store/store'

Vue.use(AuthPlugin)

Vue.component('default-layout', DefaultLayout);
Vue.component('noauth-layout', NoAuthLayout);

new Vue({
  vuetify,
  store,
  router: router,
  render: h => h(App),
}).$mount('#app')

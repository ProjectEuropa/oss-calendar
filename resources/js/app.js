import Vue from "vue";
import router from '~/router'
import App from '~/App.vue'
import vuetify from '~/plugin/vuetify'
import AuthPlugin from '~/plugin/auth'
import AclPlugin from '~/plugin/acl'
import UtilPlugin from '~/plugin/util'
import VariablesPlugin from '~/plugin/variables';
import AxiosPlugin from '~/plugin/axios';
import LoadingPlugin from '~/plugin/loading';

import DefaultLayout from '~/layouts/default';
import NoAuthLayout from '~/layouts/noauth';

import '~/plugin/vee-validate'
import store from '~/store/store'

Vue.use(AuthPlugin, router)
Vue.use(AclPlugin)
Vue.use(UtilPlugin)
Vue.use(VariablesPlugin)
Vue.use(AxiosPlugin)
Vue.use(LoadingPlugin)

Vue.component('default-layout', DefaultLayout);
Vue.component('noauth-layout', NoAuthLayout);

new Vue({
  vuetify,
  store,
  router: router,
  render: h => h(App),
}).$mount('#app')

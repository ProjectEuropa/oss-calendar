const AuthPlugin = {}
AuthPlugin.install = function (Vue) {

  Vue.prototype.$auth = {
  }

  Vue.prototype.$auth.user = {
    home_page_id: 1
  }
}

export default AuthPlugin;

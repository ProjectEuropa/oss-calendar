const AuthPlugin = {}
AuthPlugin.install = function (Vue) {

  Vue.prototype.$auth = {
  }
  Vue.prototype.$auth.loginWith = (option, params) => {
    Vue.prototype.$axios.post('/api/auth/login', params.data).then(res => {
      const accessToken = res.data.access_token;
      document.cookie = `access_token=${accessToken}`

      Vue.prototype.$axios.defaults.headers.common['Authorization'] = `Bearer ${document.cookie.replace(/(?:(?:^|.*;\s*)access_token\s*\=\s*([^;]*).*$)|^.*$/, "$1")}`
      Vue.prototype.$axios.get('/api/myself').then(res2 => {
        const user = res2.data
        Vue.prototype.$auth.user = user;

        console.info(Vue.app)
      })
    }).catch(e => {
      console.error(e)
    })
  };


}

export default AuthPlugin;

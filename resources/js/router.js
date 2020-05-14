import Vue from 'vue'
import Router from 'vue-router'
import Index from './pages/index'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      meta: { layout: 'default'},
      component: Index,
    }
  ],
});

export default router

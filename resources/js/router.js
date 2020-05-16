import Vue from 'vue'
import Router from 'vue-router'
import Index from '~/pages/index'
import Login from '~/pages/auth/login'
import DepartmentAdmin from '~/pages/department/admin/index'
import CommonGroupAdmin from '~/pages/common_group/admin/index'
import EventTypeAdmin from '~/pages/event_type/admin/index'
import HolidayAdmin from '~/pages/holiday/admin/index'
import IndividualGroup from '~/pages/individual_group/index'
import CheckToken from '~/pages/mypage/email/check/_token'
import SettingTokenEmail from '~/pages/password/setting/_token/_email'
import ResetEmailSent from '~/pages/password/reset_email_sent.vue'
import Reset from '~/pages/password/reset'
import UserAdmin from '~/pages/user/admin/index'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      meta: { layout: 'default', auth: true },
      component: Index,
    },
    {
      path: '/auth/login',
      name: 'Login',
      meta: { layout: 'noauth' },
      component: Login,
    },
    {
      path: '/department/admin',
      name: 'DepartmentAdmin',
      meta: { layout: 'default', auth: true },
      component: DepartmentAdmin,
    },
    {
      path: '/common_group/admin',
      name: 'CommonGroupAdmin',
      meta: { layout: 'default', auth: true },
      component: CommonGroupAdmin,
    },
    {
      path: '/event_type/admin',
      name: 'EventTypeAdmin',
      meta: { layout: 'default', auth: true },
      component: EventTypeAdmin,
    },
    {
      path: '/holiday/admin',
      name: 'HolidayAdmin',
      meta: { layout: 'default', auth: true },
      component: HolidayAdmin,
    },
    {
      path: '/individual_group',
      name: 'IndividualGroup',
      meta: { layout: 'default', auth: true },
      component: IndividualGroup,
    },
    {
      path: '/mypage/email/check/:token',
      name: 'CheckToken',
      meta: { layout: 'default', auth: true },
      component: CheckToken,
    },
    {
      path: '/password/setting/:token/:email',
      name: 'SettingTokenEmail',
      meta: { layout: 'noauth', auth: true },
      component: SettingTokenEmail,
    },
    {
      path: '/password/reset_email_sent',
      name: 'ResetEmailSent',
      meta: { layout: 'noauth' },
      component: ResetEmailSent,
    },
    {
      path: '/password/reset',
      name: 'Reset',
      meta: { layout: 'noauth' },
      component: Reset,
    },
    {
      path: '/user/admin',
      name: 'UserAdmin',
      meta: { layout: 'default', auth: true },
      component: UserAdmin,
    }
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    router.app.$axios.get("/api/myself").then(response => {
      const user = response.data;
      if (user) {
        router.app.$auth.user = user;
        next()
      } else {
        next({
          name: 'Login',
        })
      }
    }).catch(error => {
      next({
        name: 'Login',
      })
    });
    return;
  }
  next();
})

export default router

export default [
  { //验证码登录
    path: '/login/verificateCode',
    name: 'verificateCode',
    component:
      resolve =>
        require.ensure(
          [],
          () => resolve(require('views/login/verificateCode.vue')),
        ),
    meta: {
      title: '验证码登录',
      keepAlive: false,
      requireAuth: true,
      roles: ['admin', 'editor'],
    }
  },
  { //密码登录
    path: '/login/passwordLogin',
    name: 'passwordLogin',
    component:
      resolve =>
        require.ensure(
          [],
          () => resolve(require('views/login/passwordLogin.vue')),
        ),
    meta: {
      title: '密码登录',
      keepAlive: false,
      requireAuth: true,
      roles: ['admin', 'editor'],
    }
  },
  { //忘记密码
    path: '/login/forgetPassword',
    name: 'forgetPassword',
    component:
      resolve =>
        require.ensure(
          [],
          () => resolve(require('views/login/forgetPassword.vue')),
        ),
    meta: {
      title: '忘记密码',
      keepAlive: false,
      requireAuth: true,
      roles: ['admin', 'editor'],
    }
  },
  { //重置密码
    path: '/login/resetPassword',
    name: 'resetPassword',
    component:
      resolve =>
        require.ensure(
          [],
          () => resolve(require('views/login/resetPassword.vue')),
        ),
    meta: {
      title: '重置密码',
      keepAlive: false,
      requireAuth: true,
      roles: ['admin', 'editor'],
    }
  },
  { //设置密码
    path: '/login/setPassword',
    name: 'setPassword',
    component:
      resolve =>
        require.ensure(
          [],
          () => resolve(require('views/login/setPassword.vue')),
        ),
    meta: {
      title: '设置密码',
      keepAlive: false,
      requireAuth: true,
      roles: ['admin', 'editor'],
    }
  }
]
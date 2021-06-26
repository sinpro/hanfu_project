export default [
    { //登录
      path: '/login',
      name: 'Login',
      component:
        resolve =>
          require.ensure(
            [],
            () => resolve(require('views/login/index.vue')),
          ),
      meta: {
        title: '登录',
        keepAlive: false,
        requireAuth: true,
        roles: ['admin', 'editor'],
      }
    }
]
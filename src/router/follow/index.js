export default [
    { //关注
      path: '/follow',
      name: 'Follow',
      component:
        resolve =>
          require.ensure(
            [],
            () => resolve(require('views/follow')),
          ),
      meta: {
        title: '关注',
        keepAlive: false,
        requireAuth: true,
        roles: ['admin', 'editor'],
      }
    }
  ]
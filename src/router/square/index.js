export default [
    { //广场
      path: '/square',
      name: 'Square',
      component:
        resolve =>
          require.ensure(
            [],
            () => resolve(require('views/square')),
          ),
      meta: {
        title: '广场',
        keepAlive: false,
        requireAuth: true,
        roles: ['admin', 'editor'],
      }
    }
  ]
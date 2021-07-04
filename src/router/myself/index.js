export default [
    { //我的
      path: '/myself',
      name: 'Myself',
      component:
        resolve =>
          require.ensure(
            [],
            () => resolve(require('views/myself')),
          ),
      meta: {
        title: '我的',
        keepAlive: false,
        requireAuth: true,
        roles: ['admin', 'editor'],
      }
    }
]
export default [
    { //遇见
      path: '/meet',
      name: 'Meet',
      component:
        resolve =>
          require.ensure(
            [],
            () => resolve(require('views/meet')),
          ),
      meta: {
        title: '遇见',
        keepAlive: false,
        requireAuth: true,
        roles: ['admin', 'editor'],
      }
    }
  ]
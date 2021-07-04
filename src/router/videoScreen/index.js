export default [
    { //视屏
      path: '/videoScreen',
      name: 'VideoScreen',
      component:
        resolve =>
          require.ensure(
            [],
            () => resolve(require('views/videoScreen')),
          ),
      meta: {
        title: '视屏',
        keepAlive: false,
        requireAuth: true,
        roles: ['admin', 'editor'],
      }
    }
  ]
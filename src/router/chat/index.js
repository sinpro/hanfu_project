export default [
    { //聊天
      path: '/chat',
      name: 'Chat',
      component:
        resolve =>
          require.ensure(
            [],
            () => resolve(require('views/chat')),
          ),
      meta: {
        title: '聊天',
        keepAlive: false,
        requireAuth: true,
        roles: ['admin', 'editor'],
      }
    }
]
export default [
  { //登录
    path: '/home',
    name: 'Home',
    component:
      resolve =>
        require.ensure(
          [],
          () => resolve(require('views/home/index.vue')),
        ),
    meta: {
      title: '首页',
      keepAlive: false,
      requireAuth: true,
      roles: ['admin', 'editor'],
    }
  }
]
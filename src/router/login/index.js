import loginMain from './loginMain';
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
  },
  { //密码系列
    path: '/login/loginMain',
    name: 'loginMain',
    component:
      resolve =>
        require.ensure(
          [],
          () => resolve(require('views/login/components/loginMain.vue')),
        ),
    meta: {
      title: '登录',
      keepAlive: false,
      requireAuth: true,
      roles: ['admin', 'editor'],
    },
    redirect:'/login/verificateCode',
    children:[
      ...loginMain
    ]
  }
]
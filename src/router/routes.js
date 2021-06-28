import login from './login'; // 登录
import home from './home'; // 首页


// 不需要动态判断权限
const constantRoutes = [
  {
    path: '/',
    redirect: {
      path: '/home'
    }
  },
  {
    path: '/serverError',
    name: 'serverError',
    component: () => import('src/views/errorPage/serverError'),
  },
  {
    path: '*',
    name: '404',
    component: () => import('src/views/errorPage'),
  },
];
// 需求动态判断权限并通过addRoutes 动态添加的页面
const asyncRoutes = [
  ...login, // 登录
  {
    path: '/bankMain',
    name: 'bankMain',
    component: resolve =>
      require.ensure(
        [],
        () => resolve(require('src/components/bankMain')),
        'bankMain'
      ),
    children:[
      ...home, // 首页模块
    ]
  },
];
const routes = [...constantRoutes, ...asyncRoutes];
export default [...routes];
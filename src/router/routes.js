import login from './login'; // 登录
import home from './home'; // 首页
import square from './square'; // 广场
import meet from './meet'; // 遇见
// import square from './square'; // 发布
import chat from './chat'; // 聊天
import myself from './myself'; // 我的




// import follow from './follow'; // 关注
// import videoScreen from './videoScreen'; // 视屏
// import designCompetition from './designCompetition'; // 设计大赛


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
      ...square, // 广场
      ...meet, // 广场
      ...chat, // 广场
      ...myself, // 广场

      // ...follow,
      // ...videoScreen,
      // ...designCompetition,
    ]
  },
];
const routes = [...constantRoutes, ...asyncRoutes];
export default [...routes];
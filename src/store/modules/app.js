import { safeGetLocalStorage, safeSetLocalStorage } from 'src/utils/index';
// 设置token
function setToken(state, token = '') {
  safeSetLocalStorage('token', token);
  state.token = token;
}
// 设置用户菜单数据
function setUserMenus(state, menus = []) {
  safeSetLocalStorage('userMenus', menus);
  state.userMenus = menus;
}
// 设置用户菜单选中
function setUserMenusAct(state, userMenusAct = '') {
  safeSetLocalStorage('userMenusAct', userMenusAct);
  state.userMenusAct = userMenusAct;
}
// 设置用户侧边菜单栏
function setSliderMenus(state, menus = []) {
  safeSetLocalStorage('sliderMenus', menus);
  state.sliderMenus = menus;
}
// 设置侧边菜单栏选中
function setSliderMenusAct(state, sliderMenusAct = '') {
  safeSetLocalStorage('sliderMenusAct', sliderMenusAct);
  state.sliderMenusAct = sliderMenusAct;
}
// 设置面包屑列表
function setBreadcrumb(state, breadcrumb = []) {
  safeSetLocalStorage('breadcrumb', breadcrumb);
  state.breadcrumb = breadcrumb;
}
export default {
  // namespaced: true, // 模块化局部命名
  state: {
    loading: false,//是否需要loading
    loginTimeOutVisible: false, // 登录超时提示modal显示
    token: safeGetLocalStorage('token'), // token
    userMenus:safeGetLocalStorage('userMenus', []),// 菜单列表
    userMenusAct:safeGetLocalStorage('userMenusAct', ''),// 菜单选中
    sliderMenus:safeGetLocalStorage('sliderMenus', []),// 侧边栏菜单
    sliderMenusAct:safeGetLocalStorage('sliderMenusAct', ''),// 侧边栏选中
    breadcrumb:safeGetLocalStorage('breadcrumb', ''),// 面包屑列表
  },
  mutations: {
    setLoading(state, boolean) {
      state.loading = boolean;
    },
    setLoginTimeOutVisible(state, boolean) {
      state.loginTimeOutVisible = boolean;
    },
    setToken,
    setUserMenus,
    setUserMenusAct,
    setSliderMenus,
    setSliderMenusAct,
    setBreadcrumb,

  },
  actions: {
    getUserMenus(ctx, Vue) {
      Vue.$api.getMenus().then((res) => {
        const { menuList } = res.data;
        ctx.commit('setUserMenus', Object.freeze(menuList)); // 数据太大，需要freeze一下，否则耗性能
      });
    },
  },
  getters: {
    getLoading(state) {
      return state.loading;
    },
    getLoginTimeOutVisible(state) {
      return state.loginTimeOutVisible;
    },
    getToken(state) {
      return state.token;
    },
    getUserMenus(state) {
      return state.userMenus;
    },
    getUserMenusAct(state) {
      return state.userMenusAct;
    },
    getSliderMenus(state) {
      return state.sliderMenus;
    },
    getSliderMenusAct(state) {
      return state.sliderMenusAct;
    },
    getBreadcrumb(state) {
      return state.breadcrumb;
    },
  }
};

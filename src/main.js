import Vue from 'vue';
import App from './app.vue';
import router from './router';

import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';
NutUI.install(Vue)

import store from './store';

// 引入埋点工具
import track from 'src/common/track';
// 注册埋点工具
Vue.use(track, { init: !isMockEnv }); // process.env && process.env.IS_TRACK === 'open';


// 自定义过滤器
// import './filtres';
// import * as filters from './filtres';


// 自定义指令
import './directives';
import * as directives from './directives';
//注册全局指令directives
Object.keys(directives).forEach((directivesName) => {
	Vue.directive(directivesName, directives[directivesName]);
});

// demo环境
if(isMockEnv){
	const mock = require('../mock');
	mock.mockXHR();
}
// css入口
import './style/index.scss';

const root = document.createElement('div');
document.body.appendChild(root);
new Vue({
	router,
	store,
	render: c => c(App)
}).$mount(root);
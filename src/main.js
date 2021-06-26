import Vue from 'vue';
import App from './app.vue';
import router from './router';

import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);

import store from './store';

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
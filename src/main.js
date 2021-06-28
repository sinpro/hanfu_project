import Vue from 'vue';
import App from './app.vue';
import router from './router';

import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';
NutUI.install(Vue)

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
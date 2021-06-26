import Vue from 'vue';
import axios from 'axios';
import store from '../store';

import MyPromise from 'promise';// 兼容ie10，promise resolve之后 then不执行的问题
import { storageLoginStatus } from './index';
const devConfig = require('../../config/dev.js');
const isDev = process.env.NODE_ENV;

let ajaxCounter = 0;
function rqs(data) {
  return JSON.stringify(data);
}

// 获取vue链
const $$context = Vue.prototype;

/**
 * 处理生产环境和开发环境接口请求地址
 * @param config
 * @returns {any}
 */
function handlePreUrl(config={}){
  const isDevEnv = isDev === 'development';
  const {
    url='',  // 接口地址
    devPreUrl = '', // 开发环境url前缀地址
    prodPreUrl = '', // 生产环境url前缀地址
    prodServer = ENV_CONFIG.base_url, // 生产的服务地址
  } = config;
  let fixUrl = url; // 拼接的url
  const prodServerReg = new RegExp(prodServer); // 生产接口地址正则
  // dev环境
  if(isDevEnv){
    fixUrl = `${devPreUrl}${url}`;
  }else if(!(prodServerReg.test(prodPreUrl) || prodServerReg.test(url))){
    // 生产环境或配置的地址以配置的接口地址开始
    fixUrl = `${prodServer}${prodPreUrl}${url}`;
  }

  return Object.assign(config, {url: fixUrl});
}

const ajax = axios.create({
  baseURL: '',
  timeout: 60000,
  transformRequest: [rqs],
  headers: {
    'Content-Type': 'application/json',
    'X-origin':''
  },
});

ajax.interceptors.request.use(
  (config) => {
    if (!config['noLoading']) {
      ajaxCounter++;
      store.commit('setLoading', true);
    }
    // 请求头设置token
    config.headers.token = isDev==='development' ? devConfig.token : store.state.app.token;
    // 允许get请求下，可设置请求头
    if (config.method === 'get') {
      config.data = true;
    }
    return handlePreUrl(config);
  },
  (err) => {
    ajaxCounter = 0;
    store.commit('setLoading', false);
    $$context.$message.error('网络请求超时');
    return new MyPromise((resolve, reject) => reject(err));
  }
);

ajax.interceptors.response.use(
  (response) => {
    // console.log('noLoading', !response.config['noLoading'])
    if (!response.config['noLoading'] && ajaxCounter > 0) {
      ajaxCounter--;
    }
    // console.log('返回拦截', ajaxCounter);
    if (ajaxCounter <= 0) {
      ajaxCounter = 0;
      store.commit('setLoading', false);
    }
    // 重映射返回信息
    if (response.data.errorMsg) {
      response.data.errorMessage = response.data.errorMsg;
      // delete response.data.errorMsg;
    }
    let result = response.data;
    // 获取登录标识
    const sessionLoginStatus = storageLoginStatus('', 'get');
    // EBCBLOGOUT 已经没有了这个错误码，用401替代
    if (result.resultCode === 401 && !isMockEnv) {
      console.log('result',result)
      console.log('result.data',result.data)
      if (
        sessionLoginStatus &&
        +sessionLoginStatus &&
        !excludeUrl.includes(response.config.url)
      ) {
        store.commit('setLoginTimeOutVisible', true);
        localStorage.setItem('loginUrl', result.data);
      } else {
        window.noPopBeforeUnload = true;
        window.location.href = result.data;
      }
      return new MyPromise((resolve) => resolve(result));
    }
    // 给errorMessage加个默认值，避免提示信息为空
    if (result.errorCode !== '000000') {
      result.errorMessage = !result.errorMessage
        ? '服务繁忙'
        : result.errorMessage;
    } else if (!sessionLoginStatus && result.errorCode === '000000') {
      storageLoginStatus('1'); // 接口成功且登录标识不存在时写入登录标识
    }

    if (response.config.responseType === 'blob') {
      result = {
        headers: response.headers,
        data: response.data,
      };
    }
    return new MyPromise((resolve) => resolve(result));
  },
  (err) => {
    ajaxCounter = 0;
    // console.log('返回拦截失败', ajaxCounter)
    store.commit('setLoading', false);
    console.log('network error', err.msg);
    return new MyPromise((resolve, reject) => reject(err));
  }
);

export default ajax;

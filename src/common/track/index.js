import UaParserJS from 'ua-parser-js';
// 获取浏览器和操作系统相关信息
const uaParser = new UaParserJS();
const currBrowser = uaParser.getBrowser(); // 获取浏览器信息
const currOS = uaParser.getOS(); // 获取电脑系统信息

export function trackHandler(trackData,event) {
  const configParams={
    
  }
  console.log(configParams,'埋点上报数据')
}

const install = (Vue, options = {}) => {
    if (install.installed) return;
    install.installed = true;
    install.options = options;  // 注册时配置
    /* 定义属性到Vue原型中 */
    Object.defineProperties(Vue.prototype, {
      $trackHandler: {
        get() {
          return (trackData,event)=>trackHandler(trackData,event);
        }
      },
    });
};
export default {
    install
};

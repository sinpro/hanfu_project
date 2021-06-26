const Mock = require('mockjs');
const { createReturnData } = require('../untils');
import navMenu from './navMenu';
export default  [
  /**
   * [描述] 【xxx】登录接口
   * */
  {
    url: '/application/loginApi',
    type: 'post',
    response: function (config) {
      return createReturnData(
        Mock.mock({
          token: 'xxxxxxxxx', // token
          userInof: {}
        })
      );
    }
  },
  {
    url: '/application/getMenus',
    type: 'post',
    response: function (config) {
      return createReturnData(
        Mock.mock({
          grade:'B',
          menuList:navMenu
        })
      );
    }
  }
]
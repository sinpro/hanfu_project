/**
 * 创建公共返回API
 * @param { Any } data
 * @param {string} code
 * @param {string} message
 */
exports.createReturnData = (data, code, message) => {
  if (!data) {
    throw new Error('return data is need');
  }
  return {
    errorCode: code || '000000',
    errorMessage: message || '交易成功',
    data
  };
};
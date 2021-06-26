/**
 * 设置获取登录状态处理登录超时提示
 * @param val
 * @param type
 */
export function storageLoginStatus(val = '', type = 'set') {
  const { lastLogonTime } = safeGetLocalStorage('userInfo', {});
  let loginTime;
  if (lastLogonTime) {
    const changeTime =
      lastLogonTime.indexOf('-') > -1
        ? lastLogonTime.replace('-', '/')
        : lastLogonTime;
    loginTime = new Date(changeTime).getTime();
  }

  const storageKey = `loginStatus${loginTime}`; // 保存登录态的key
  if (type === 'set') {
    if (!loginTime) return;
    sessionStorage.setItem(storageKey, val);
  } else {
    return sessionStorage.getItem(storageKey);
  }
}

/**
 * 获取安全localStorage数据
 * @param name  storage的key值
 * @param defaultVal  storage的默认值
 * @returns {*}
 */
export function safeGetLocalStorage(name='', defaultVal=''){
  if(!name) return;
  let localNameDatas;
  const getLocalData = localStorage.getItem(name);
  if(getLocalData && getLocalData!=='[object Object]'){
    if(/^(\[|\{)/.test(getLocalData)){
      localNameDatas = JSON.parse(getLocalData);
    }else{
      localNameDatas = getLocalData;
    }
  }else{
    localNameDatas = defaultVal;
  }
  return localNameDatas;
}

/**
 * 设置安全localStorage数据
 * @param name
 * @param defaultVal
 */
export function safeSetLocalStorage(name='', defaultVal=''){
  if(!name) return;
  let safeValue = defaultVal;
  if(typeof safeValue === 'object'){
    safeValue = JSON.stringify(safeValue);
  }
  localStorage.setItem(name, safeValue)
}
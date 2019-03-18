const formatNumber = n => {
  n = n.toString();
  return n[1] ? n : '0' + n;
};

const formatDate = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return [year, month, day].map(formatNumber).join('-');
};

/**
 * 存储localStorage
 */
const setStore = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
};

/**
 * 获取localStorage
 */
const getStore = name => {
  if (!name) return;
  return window.localStorage.getItem(name);
};

/**
 * 删除localStorage
 */
const removeStore = name => {
  if (!name) return;
  window.localStorage.removeItem(name);
};

// 获取cookie、
const getCookie = name => {
  let ret = '';
  if (typeof name === 'string' && name != '') {
    let str = '(^| )' + name + '=([^;]*)(;|$)',
      reg = new RegExp(str),
      m;
    if (m = document.cookie.match(reg)) {
      ret = decodeURIComponent(m[2]);
    }
  }
  return ret;
};

// 设置cookie,增加到vue实例方便全局调用
const setCookie = (name, value, days, path) => {
  let expires = '';
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toGMTString();
  }
  path = path || '/';
  document.cookie = name + '=' + encodeURIComponent(value) + expires + '; path=' + path;
};

// 删除cookie
const delCookie = (name) => {
  let exp = new Date();
  exp.setTime(exp.getTime() - 1);
  let val = getCookie(name);
  val && (document.cookie = name + '=' + val + '; expires=' + exp.toGMTString());
};

const remTopx = (remValue) => {
  let fontSize = getComputedStyle(window.document.documentElement)['font-size'];
  console.log('当前根目录fontsize:px -> :', parseInt(fontSize), '转化为rem:', (parseInt(fontSize) * remValue) / 100);
  return (parseInt(fontSize) * remValue) / 100;
};

const model = {
  formatDate: formatDate,
  setStore: setStore,
  getStore: getStore,
  removeStore: removeStore,
  getCookie: getCookie,
  setCookie: setCookie,
  delCookie: delCookie,
  remTopx: remTopx
};

export default model;

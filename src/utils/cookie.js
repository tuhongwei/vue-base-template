// 获取cookie、
export const getCookie = name => {
  let ret = '';
  if (typeof name === 'string' && name !== '') {
    let str = '(^| )' + name + '=([^;]*)(;|$)';
    let reg = new RegExp(str);
    let m;
    if ((m = document.cookie.match(reg))) {
      ret = decodeURIComponent(m[2]);
    }
  }
  return ret;
};

// 设置cookie,增加到vue实例方便全局调用
export const setCookie = (name, value, days, path) => {
  let expires = '';
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toGMTString();
  }
  path = path || '/';
  document.cookie =
    name + '=' + encodeURIComponent(value) + expires + '; path=' + path;
};

// 删除cookie
export const delCookie = name => {
  let exp = new Date();
  exp.setTime(exp.getTime() - 1);
  let val = getCookie(name);
  val &&
    (document.cookie = name + '=' + val + '; expires=' + exp.toGMTString());
};

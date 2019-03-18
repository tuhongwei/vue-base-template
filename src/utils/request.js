import axios from 'axios';
import {
  baseURL, loginURL
} from '@/config';
import util from './index';
import {
  Message
} from 'element-ui';

const instance = axios.create({
  baseURL,
  timeout: 5000
});

// http请求拦截器
instance.interceptors.request.use(config => {
  const token = util.getCookie('token'); // 获取Cookie
  // console.log('token',token);
  if (token) {
    config.headers.token = token; // 后台接收的参数,加上token
  }
  return config;
}, error => {
  Message.error(error.request.response.data.msg);
  return Promise.reject(error.request);
});
// http响应拦截器
instance.interceptors.response.use(response => {
  if (!response || !response.data) return;
  if (response.data.code == 401) {
    util.delCookie('token');
    util.delCookie('userInfo');
    location.href = loginURL;
  } else if (response.data.code != 1) {
    Message.error(response.data.msg);
    return Promise.reject(response);
  }
  return response.data;
},
error => {
  console.log('error', error.response);
  if (error.response.data.code == 401) {
    util.delCookie('token');
    util.delCookie('userInfo');
    // Message.error(error.response.data.msg);
    location.href = loginURL;
  }
  return Promise.reject(error.response);
});

export default instance;

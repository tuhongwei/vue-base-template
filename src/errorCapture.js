// 捕获错误并上传
import Vue from 'vue';
import request from './utils/request';

const sendError = () => {
  request.post('/middleware/errorMsg', {}).then(res => {});
};
Vue.config.errorHandler = (err, vm, info) => {
  console.log(err, info);
  sendError();
};

window.onerror = function (errorMessage, scriptURI, lineNo, columnNo, error) {
  console.log('errorMessage: ' + errorMessage); // 异常信息
  console.log('scriptURI: ' + scriptURI); // 异常文件路径
  console.log('lineNo: ' + lineNo); // 异常行号
  console.log('columnNo: ' + columnNo); // 异常列号
  console.log('error: ' + error); // 异常堆栈信息

  // 构建错误对象
  // var errorObj = {
  //   errorMessage: errorMessage || null,
  //   scriptURI: scriptURI || null,
  //   lineNo: lineNo || null,
  //   columnNo: columnNo || null,
  //   stack: error && error.stack ? error.stack : null
  // };
};

// console.log(a);

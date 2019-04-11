// 捕获错误并上传
import Vue from 'vue';
import request from './utils/request';

const sendError = err => {
  request.post('/middleware/errorMsg', err).then(res => {
    console.log(res.data);
  });
};
Vue.config.errorHandler = (err, vm, info) => {
  console.log(err, info);
  sendError(err);
};

window.onerror = function (errorMessage, scriptURI, lineNo, columnNo, error) {
  console.log('errorMessage: ' + errorMessage); // 异常信息
  console.log('scriptURI: ' + scriptURI); // 异常文件路径
  console.log('lineNo: ' + lineNo); // 异常行号
  console.log('columnNo: ' + columnNo); // 异常列号
  console.log('error: ' + error); // 异常堆栈信息

  // 构建错误对象
  let errorObj = {
    errorMessage: errorMessage || null,
    scriptURI: scriptURI || null,
    lineNo: lineNo || null,
    columnNo: columnNo || null,
    stack: error && error.stack ? error.stack : null
  };
  sendError(errorObj);
};

// console.log(a);

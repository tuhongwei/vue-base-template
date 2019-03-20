const requireRouters = require.context('.', true, /\.js$/);
console.log(requireRouters.keys());
let configRouters = [];
requireRouters.keys().forEach(fileName => {
  if (fileName === './index.js') return;
  // 获取路由配置
  const routerConfig = requireRouters(fileName);
  configRouters = configRouters.concat(routerConfig.default || routerConfig);
});
export default configRouters;

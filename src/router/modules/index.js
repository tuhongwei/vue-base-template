const requireComponent = require.context('.', true, /\.js$/);
console.log(requireComponent.keys());
let configRouters = [];
requireComponent.keys().forEach(fileName => {
  if (fileName === './index.js') return;
  // 获取组件配置
  const componentConfig = requireComponent(fileName);
  configRouters = configRouters.concat(componentConfig.default || componentConfig)
});
export default configRouters;

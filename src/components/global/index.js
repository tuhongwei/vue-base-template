import Vue from 'vue';

const requireComponent = require.context('.', true, /\.(vue|js)$/);
requireComponent.keys().forEach(fileName => {
  if (fileName === './index.js') return;
  // 获取组件配置
  const componentConfig = requireComponent(fileName);
  const componentEntity = componentConfig.default || componentConfig;
  Vue.component(componentEntity.name, componentEntity);
});

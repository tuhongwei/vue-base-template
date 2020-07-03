import Vue from 'vue';

const requireDirective = require.context('.', true, /\.(vue|js)$/);
requireDirective.keys().forEach(fileName => {
  if (fileName === './index.js') return;
  // 获取组件配置
  const DirectiveConfig = requireDirective(fileName);
  const DirectiveEntity = DirectiveConfig.default || DirectiveConfig;
  if (!DirectiveEntity.name) return;
  Vue.directive(DirectiveEntity.name, DirectiveEntity);
});

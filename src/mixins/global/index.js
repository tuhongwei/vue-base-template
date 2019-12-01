import Vue from 'vue';

const requireMixin = require.context('.', true, /\.(vue|js)$/);
requireMixin.keys().forEach(fileName => {
  if (fileName === './index.js') return;
  // 获取mixin配置
  const mixinConfig = requireMixin(fileName);
  const mixinEntity = mixinConfig.default || mixinConfig;
  Vue.mixin(mixinEntity);
});

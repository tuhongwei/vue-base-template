import Vue from 'vue'
import Router from 'vue-router';
import ModuleRouters from './modules';
import CommonRouters from './common';

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    };
  },
  routes: [...ModuleRouters, ...CommonRouters]
});

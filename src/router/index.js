import Vue from 'vue';
import Router from 'vue-router';
const Index = () => import('@/pages/index');
const ManageCenter = () => import('@/pages/ManageCenter');

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    };
  },
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/index',
      redirect: '/'
    },
    {
      path: '/manageCenter',
      component: ManageCenter,
      meta: {
        requireAuth: true
      }
    }
  ]
});

import router from './router';
import store from './stores';
import util from '@/utils';
import { loginURL, expireDays } from '@/config';
import request from '@/utils/request';

router.beforeEach((to, from, next) => {
  console.log(to.path, to.matched);
  if (to.matched.some(record => record.meta.requireAuth)) {
    // 验证是否已经登录拦截
    let token = util.getCookie('token');
    if (!token) {
      location.href = loginURL;
      return;
    }
    let userInfo = util.getCookie('userInfo');
    if (userInfo) {
      console.log('userInfo===', userInfo);
      let u = JSON.parse(userInfo);
      store.commit('recordUserInfo', u);
      return;
    }
    request.post('/api/user/index')
      .then(res => {
        let u0 = res.data.info;
        let userInfo = JSON.stringify(u0);
        util.setCookie('userInfo', userInfo, expireDays);
        store.commit('recordUserInfo', u0);
      })
      .catch(err => {
        console.log(err);
        next();
      });
  } else {
    next();
  }
});

// 解决更新代码后 Error:Loading chunk {n} failed.的问题
router.onError(err => {
  const pattern = /Loading chunk (\d)+ failed/g;
  const isChunkLoadFailed = err.message.match(pattern);
  if (isChunkLoadFailed) {
    let chunkBool = sessionStorage.getItem('chunkError');
    let nowTimes = Date.now();
    if (
      chunkBool === null ||
      (chunkBool && nowTimes - parseInt(chunkBool) > 60000)
    ) {
      // 路由跳转报错,href手动跳转
      sessionStorage.setItem('chunkError', 'reload');
      const targetPath = router.history.pending.fullPath;
      location.href = location.protocol + '//' + location.host + targetPath;
    } else if (chunkBool === 'reload') {
      // 手动跳转后依然报错,强制刷新
      sessionStorage.setItem('chunkError', Date.now());
      location.reload(true);
    }
  }
});
export default router;

export default {
  /**
   * 记录用户信息
   */
  recordUserInfo (state, info) {
    state.userInfo = info;
    state.login = true;
  }
};

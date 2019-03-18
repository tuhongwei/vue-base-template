"use strict";
const merge = require("webpack-merge");
const prodEnv = require("./prod.env");

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: '"http://117.121.42.97:8080"',
  LOGIN_URL: '"/testLogin"',
  LOGOUT_URL: '"http://test-gamebox.cocos.com/index/user/logout"'
});

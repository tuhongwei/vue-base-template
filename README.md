# 介绍

> 基于 vue2.6.9 + vue-router3.0.2 + vuex3.1.0 + webpack4.29.6
> vue-base-template 是一个 vue 基础模板，任何使用 vue 开发的都可以以此为基础进行开发。它基于 UI 框架[element-ui](https://github.com/ElemeFE/element)。
> 包含了工程项目中一系列流程：代码检查，构建，部署

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build:prod

# build for test with minification
npm run build:test

# build for development with minification
npm run build:dev

# build for production and view the bundle analyzer report
npm run build:prod --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test

# 生产changlog
npm run changelog

```

## commitizen

```bash
# 在工程目录，运行下面命令，使其支持 Angular的Commit message格式（需全局安装commitizen），凡是用到git commit命令，一律改为使用git cz。这时，就会出现选项，用来生成符合格式的 Commit message
npm run commitizen
```

## 目录结构

```js
vue-base-template
│   build                   // webpack配置
│   config                  // 配置文件
│   scripts                 // 帮助脚本文件
│   doc                     // 文档
│   specs                   // 规范说明
│   static                  // 静态文件
└───src                     // 业务逻辑代码
│   │   assets              // 资源
│   └── components          // 公共组件
│   │     └──global         // 全局组件
│   │        │ BaseTable     // 基础表格
│   │        │ BoxContent    // 基础Box
│   │   directives           // 公共指令
│   │   filters             // 过滤器
│   │   mixins              // mixins
│   └── router              // 路由文件
│   │     │  modules        // 业务路由文件夹
│   │     │  common.js      // 通用路由
│   │     │  index.js       // 路由汇总
│   │   stores               // vuex
│   │   utils               // 工具库
│   │   global.js           // 全局模块处理
│   │   interception.js     // 路由拦截器
│   │   main.js             // 入口文件
```

## 注意点

css 单位使用 rem

## 更新日志

[CHANGELOG.md](https://github.com/tuhongwei/vue-base-template/blob/master/CHANGELOG.md)

## 计划列表

[TODO.md](https://github.com/tuhongwei/vue-base-template/blob/master/TODO.md)

Detailed changes for each release are documented in the [release notes](https://github.com/tuhongwei/vue-base-template/releases).

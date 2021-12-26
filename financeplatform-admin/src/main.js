import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets 基础css样式

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' //全局css样式定义
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n

import '@/styles/index.scss' // global css

import App from './App' //根组件，构建组件树
import store from './store' //可以简单的理解为后端的session 存储一些本地信息的工具 前端存储信息 可以用cookie，localStorage。。。 主要做前端信息存储的工具就是store
import router from './router' //路由模块

import '@/icons' // icon 图标模块
import '@/permission' // permission control 前端做框架的权限处理，角色处理的一个模块 不是官方现成的

/**
 * 模拟接口服务器的一些设置
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

// set ElementUI lang to EN
//把elementUI挂载到vue上，就可以用类似this.$confirm这样的方式实现
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false

//项目中核心的vue对象 正常来说用的时候都要导入 都要new vue 但是我们写的时候没有，只在这里写了
//渲染的#app 就是public/index.html中的id = ‘app’
//render：渲染引擎，
new Vue({
  el: '#app',
  router, //挂载路由
  store,
  render: (h) => h(App), //组件 根组件以这种形式挂载到项目当中
})

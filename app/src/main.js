// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// Vue 框架配置文件
import Vue from 'vue'; // 导入vue框架
import App from './App';  // 导入模板与组件
import router from './router'; // 导入路由
import store from './vuex/store'; // 引入状态
Vue.config.productionTip = true; // 生产模式提醒，会在控制台打印写信息

new Vue({
  el: '#app', // 使用css选择器格式,获取对应元素
  router,  // 路由
  store,   // 状态存储
  components: {App}, // 组件
  template: '<App/>' // 模板 vue.esm.js?915d:628 [Vue warn]: Unknown custom element: <App> - did you register the component correctly
});

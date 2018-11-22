// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import App from './App'
import router from './scripts/router'

//引入element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//axios，代理
 import axios from 'axios';
 Vue.prototype.$axios = axios;//在vue中使用axios
 //axios.defaults.baseURL = '/api';//没用到
// axios.defaults.headers.post['Content-Type'] = 'application/json';//没用到
axios.defaults.baseURL=(process.env.NODE_ENV === 'development' ? '/api' : 'http://api.yunchong168.com/');//proxy判断是开发环境还是生产环境

//console.log(axios.defaults.baseURL)

require('./styles/app.scss');

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  //components: { App },
  template: '<router-view></router-view>'//根路由挂载在#app上
})

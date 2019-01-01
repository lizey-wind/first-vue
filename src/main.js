// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'

import $ from 'jquery'
import './assets/css/bootstrap.min.css'  
import './assets/js/bootstrap.min.js'  

import api from './api/index.js'

Vue.prototype.$api = api
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  watch: {
    '$route': function (route) {
    var query = route.query;
    this.page = query.page;
    }
  }
})

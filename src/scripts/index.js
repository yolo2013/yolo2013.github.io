/**
 * Created by xuhua on 7/12/2016.
 */
require('../styles/base')
require('../styles/overlay')

import Vue from 'vue'
// import VueRouter from 'vue-router'
// import routerMap from './routers'
import Vuex from 'vuex'

import App from './components/App.vue'
import store from './vuex/store'

// Vue.use(VueRouter)
// 实例化VueRouter
// let router = new VueRouter()

new Vue({
  el: 'body',
  store,
  replace: true,
  components: {
    App
  }
})

// let app = Vue.extend({
//   components: { App }
// })
//
// routerMap(router)
//
// router.start(app, "#app")

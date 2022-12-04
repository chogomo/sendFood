/*
入口js
*/
import Vue from 'vue'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'
import './mock/mockServer' //加載mockServer即可
import loading from './common/imgs/loading.gif'
import './fiters' //加載過濾器


//註冊全局組件標籤
Vue.component(Button.name,Button) //<mt-button>
Vue.use(VueLazyload,{//內部自定義一個指令叫Lazy
  loading
})

Vue.config.productionTip = false
//應用插件
Vue.use(VueRouter)


new Vue({
  el:'#app',
  render: h => h(App),
  router, //使用上vue-router
  store, //使用上vuex
})


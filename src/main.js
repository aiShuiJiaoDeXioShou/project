import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import vueAplayer from 'vue-aplayer'
import VueAliplayerV2 from "vue-aliplayer-v2";
import Url from "./tools/Url"

Vue.config.productionTip = false
Vue.use(VueAliplayerV2);
Vue.use(vueAplayer)
Vue.prototype.$url = Url

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

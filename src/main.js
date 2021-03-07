import Vue from 'vue'
import App from './App.vue'
import toastPlugin from './plugins/toastPlugin.js'

import Highlight from './utils/highlight'; // from 路径是highlight.js的路径，纯属自定义
Vue.use(Highlight);

Vue.use(toastPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import toastPlugin from './plugins/toastPlugin.js'

Vue.use(toastPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

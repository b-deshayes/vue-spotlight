import Vue from 'vue'
import App from './App.vue'

import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)

import Components from "@/components";
Vue.use(Components.Spotlight);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

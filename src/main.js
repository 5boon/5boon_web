import Vue from 'vue'
import App from './App.vue'
import router from './routes'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueCarousel from 'vue-carousel';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vuetify from '@/plugins/vuetify' // path to vuetify export

Vue.use(VueCarousel);
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app')

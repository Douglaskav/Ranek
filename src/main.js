import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PaginaCarregando from "@/components/PaginaCarregando.vue";

Vue.config.productionTip = false
Vue.component("PaginaCarregando", PaginaCarregando)

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')

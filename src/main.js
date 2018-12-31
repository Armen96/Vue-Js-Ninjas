import Vue from 'vue'
/**
 * BootstrapVue
 */
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

/**
 * Components
 */
import App from './App.vue'
import Header from './components/Header'

Vue.component('Header',Header);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')



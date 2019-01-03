import Vue from 'vue'
/**
 * BootstrapVue
 */
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

/**
 * Vue Resource
 * Axios
 */
// import VueResource from 'vue-resource'
// Vue.use(VueResource);
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);

/**
 * Routing
 */
import Routes from './routes';
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

/**
 * Filters
 */
Vue.filter('to-uppercase',function(value){
  return value.toUpperCase();
});

/**
 * Components
 */
import App from './App.vue'
import Header from './components/Header'

Vue.component('Header',Header);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')



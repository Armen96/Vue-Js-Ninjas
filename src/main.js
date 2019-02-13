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
import router from './route/routes';


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
import Header from './components/layouts/Header'

Vue.component('Header',Header);

Vue.config.productionTip = false;

import { store } from './store/index';
import { createProvider } from './vue-apollo'

new Vue({
 store: store,
 render: h => h(App),
 apolloProvider: createProvider(),
 router: router
}).$mount('#app');



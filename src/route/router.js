import Vue from 'vue';
import {routes} from './routes';
import VueRouter from 'vue-router'
import { checkAuthentication } from '../utils/middleware'

Vue.use(VueRouter);

const router =  new VueRouter({
    linkActiveClass: 'is-active',
    routes: routes,
    mode: 'history'
});

checkAuthentication(router)

export default router;

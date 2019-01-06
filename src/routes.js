import Vue from 'vue';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import Persons from './components/Persons';
import Vuex from './components/Vuex';
import PageNotFound from './components/PageNotFound';

import {store} from './store/store'

import VueRouter from 'vue-router'
Vue.use(VueRouter);

const Routes = [
    {
        path: '/',
        component: Home,
        meta: {auth: true}
    },
    {
        path: '/about',
        component: About ,
        meta: {auth: true}
    },
    {
        path: '/contact',
        component: Contact,
        meta: {auth: true}
    },
    {
        path: '/persons/:id?',
        component: Persons,
        meta: {auth: true}
    },
    {
        path: '/vuex',
        component: Vuex ,
        meta: {auth: true}
    },
    {
        path: '/a',
        component: About, alias: '/b',
        meta: {auth: true}
    },
    {
        path: "*",
        component: PageNotFound
    }
];


const router =  new VueRouter({
    linkActiveClass: 'is-active',
    routes: Routes,
    mode: 'history'
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.auth)) {
        if (!store.getters.isLogged) {
            next({
                path: '/page-not-found',
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;

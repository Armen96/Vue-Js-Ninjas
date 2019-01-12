import Vue from 'vue';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Home from './components/Home';
import Persons from './components/Persons';
import Login from './components/pages/Login';
import PageNotFound from './components/layouts/PageNotFound';

import {store} from './store/index'

import VueRouter from 'vue-router'
Vue.use(VueRouter);

const Routes = [
    {
        path: '/', component: Home,
        meta: {auth: true}
    },
    {
        path: '/login', component: Login ,
    },
    {
        path: '/about', component: About ,
    },
    {
        path: '/contact', component: Contact,
        meta: {auth: true}
    },
    {
        path: '/persons/:id?', component: Persons,
        meta: {auth: true}
    },
    {
        path: "*", component: PageNotFound
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

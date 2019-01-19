import Vue from 'vue';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Clans from './components/pages/Clans';
import ClansChild from './components/pages/ClansChild';
import Profile from './components/pages/Profile';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import PageNotFound from './components/layouts/PageNotFound';

import {store} from './store/index'

import VueRouter from 'vue-router'
Vue.use(VueRouter);

const Routes = [
    {
        path: '/', component: Home,
    },
    {
        path: '/login', component: Login ,
    },
    {
        path: '/register', component: Register ,
    },
    {
        path: '/about', component: About ,
    },
    {
        path: '/contact', component: Contact,
        meta: {auth: true}
    },
    {
        path: '/clans', component: Clans,
        meta: {auth: true},
    },
    {
        path: '/clans/:id', component: ClansChild,
        meta: {auth: true},
    },
    {
        path: '/profile', component: Profile,
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
                path: '/login',
            });
        } else {
            next();
        }
    } else {
        if (store.getters.isLogged) {
            if(to.path === '/login' || to.path === '/register'){
                next({
                    path: '/about',
                });
            }
        }

        next();
    }
});

export default router;

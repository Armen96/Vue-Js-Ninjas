import Vue from 'vue';
import Vuex from 'vuex';
import users from './modules/user/store';
import clans from './modules/clans';
import books from './modules/book/store';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules:{
         users,
         books,
         clans,
    }
});

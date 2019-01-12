import Vue from 'vue';
import Vuex from 'vuex';
import {mutations,actions,state,getters} from './module';
import users from './modules/users';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules:{
         users
    },
    state: {
        ...state
    },
    getters: {
        ...getters
    },
    mutations:{
        ...mutations
    },
    actions:{
        ...actions
    }
});

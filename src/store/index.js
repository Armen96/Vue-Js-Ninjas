import Vue from 'vue';
import Vuex from 'vuex';
import {mutations,actions,state,getters} from './module';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules:{

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

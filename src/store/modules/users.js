import axios from 'axios';

const state = {
    token: '',//sessionStorage.getItem('token') || '',
    user: '',//JSON.parse(sessionStorage.getItem('user')) || {},
    isLogged: true
};

const getters = {
    isLogged: state => {
        return state.isLogged
    }
};

const mutations = {
    USER_LOGOUT: state => {
        state.isLogged = false
    },
    SIGN_IN: state => {

        state.isLogged = true
    }
};

const actions = {
    LOGOUT({commit}){
        return new Promise((resolve,reject) => {
            commit('USER_LOGOUT')
            resolve()
        })
    },
    SIGN_IN({commit}){
        return new Promise((resolve, reject) => {
            commit('SIGN_IN')
            resolve()
        })
    }
};

export default{
    state,
    actions,
    mutations,
    getters
}


import config from '../../../config/config'
import axios from 'axios'
import { setLocalStorage, getLocalStorage, clearLocalStorage } from '../../../utils/localStorage'

const initialState = {
    token: getLocalStorage('token') || '',
    user: JSON.parse(getLocalStorage('user')) || {},
};

const getters = {
    isLogged: state => {
        return !!state.token
    },
    getUser: state => {
        return state.user
    },
    getToken: state => {
        return state.token
    }
};

const mutations = {
    LOGOUT: (state) => {
        state.user = ''
        state.token = {}
        clearLocalStorage();
    },
    SIGN_IN: (state,{user,token}) => {
        state.user = user
        state.token = token
        setLocalStorage('token',token)
        setLocalStorage('user',JSON.stringify(user))
    },
    SIGN_UP: (state,{user,token}) => {
        state.user = user
        state.token = token
        setLocalStorage('token',token)
        setLocalStorage('user',JSON.stringify(user))
    }
};

const actions = {
    LOGOUT({commit}){
        let token = getLocalStorage('token')
        return new Promise((resolve,reject) => {
            axios.post(config.api + 'logout',{
                token
            }).then(({data})=>{
                if (data.status) {
                    commit('LOGOUT')
                    resolve()
                } else {
                    reject(data.message);
                }
            })
        })
    },
    SIGN_IN: function ({commit}, {email, password}) {
        return new Promise((resolve, reject) => {
            axios.post(config.api + 'login', {
                email,
                password,
            }).then(({data}) => {

                if (data) {
                    commit('SIGN_IN', {user: data.user, token: data.token})
                    resolve()
                } else {
                    reject(data.message);
                }
            }).catch(() => {
                reject('Error sending request to server!');
            })
        })
    },
    SIGN_UP({commit},{name,email,password}){
        return new Promise((resolve, reject) => {
            axios.post(config.api + 'register',{
                name,
                email,
                password
            }).then(({data}) => {
                if (data) {
                    commit('SIGN_UP', { user: data.user, token: data.token })
                    resolve()
                } else {
                    reject(data.message);
                }
            }).catch(() => {
                reject('Error sending request to server!');
            })
        })
    }
};

export default{
    state:initialState,
    actions,
    mutations,
    getters
}


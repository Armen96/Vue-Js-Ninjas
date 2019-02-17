import config from '../../../config'
import axios from 'axios'

const initialState = {
    token: sessionStorage.getItem('token') || '',
    user: JSON.parse(sessionStorage.getItem('user')) || {},
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
        sessionStorage.clear()
    },
    SIGN_IN: (state,{user,token}) => {
        state.user = user
        state.token = token
        sessionStorage.setItem('token', token)
        sessionStorage.setItem('user', JSON.stringify(user))

    },
    SIGN_UP: (state,{user,token}) => {
        state.user = user
        state.token = token
        sessionStorage.setItem('token', token)
        sessionStorage.setItem('user', JSON.stringify(user))
    }
};

const actions = {
    LOGOUT({commit}){
        let token = sessionStorage.getItem('token')
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


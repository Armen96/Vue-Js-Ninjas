import { setLocalStorage, getLocalStorage, clearLocalStorage } from '../../../utils/localStorage'
import { logout, login, register } from '../../../api'

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
        state.user = '';
        state.token = {};
        clearLocalStorage();
    },
    SIGN_IN: (state,{user,token}) => {
        state.user = user;
        state.token = token;
        setLocalStorage('token',token);
        setLocalStorage('user',JSON.stringify(user));
    },
    SIGN_UP: (state,{user,token}) => {
        state.user = user;
        state.token = token;
        setLocalStorage('token',token);
        setLocalStorage('user',JSON.stringify(user));
    }
};

const actions = {
    LOGOUT: async ({commit}) => {
        let token = getLocalStorage('token');
        await logout({token: token});
        commit('LOGOUT')
    },
    SIGN_IN: async ({commit}, {email, password}) => {
        let data = await login({email, password,});

        if (data) {
            commit('SIGN_IN', {user: data.user, token: data.token})
        }
    },
    SIGN_UP: async ({commit},{name,email,password}) => {
        let data = await register({name, email, password});

        if (data) {
            commit('SIGN_UP', { user: data.user, token: data.token })
        }
    }
};

export default{
    state:initialState,
    actions,
    mutations,
    getters
}


import { setLocalStorage, getLocalStorage, clearLocalStorage } from '../../../utils/localStorage'
import { logout, login, register, contactUs } from '../../../api'

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
    },
    CONTACT_US_MUTATION: () => {
        // console.log("Okay");
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
            commit('SIGN_IN', {user: data.user[0], token: data.token})
        }
    },
    SIGN_UP: async ({commit},{name,company,email,password}) => {
        let data = await register({name,company, email, password});

        if (data) {
            commit('SIGN_UP', { user: data.user[0], token: data.token })
        }
    },
    CONTACT_US: async ({commit},data) => {
        let response = await contactUs(data);

        if (response) {
            commit('CONTACT_US_MUTATION')
        }
    }
};

export default{
    state:initialState,
    actions,
    mutations,
    getters
}


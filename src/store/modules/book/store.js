import config from '../../../config'
import { SET_BOOKS } from './mutation-types'
import axios from 'axios'
import users from "../user/store";

const initialState = {
    books: null,
    books_title: 'Books at Bookami'
};

const getters = {
    getAllBooksDispatch: (state) => {
        return state.books
    },
};

const mutations = {
    [SET_BOOKS](state,{data}) {
        state.books = data.data;
    },
};

const actions = {
    GET_BOOKS: async ({ commit }) => {
        let token = users.getters.getToken;
        await axios.get(config.api + 'books', {token})
            .then(({data}) => {
                if (data) {
                    commit('SET_BOOKS', {data: data})
                }
            })
    },
};


export default {
    state: initialState,
    actions,
    mutations,
    getters
}
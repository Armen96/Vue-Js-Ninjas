import { SET_BOOKS } from './mutation-types'

import {
    getBooks
} from '../../../api';


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
        state.books = data;
    },
};

const actions = {
    GET_BOOKS: async ({ commit }) => {
        const data = await getBooks();
        commit('SET_BOOKS', {data: data});
    },
};


export default {
    state: initialState,
    actions,
    mutations,
    getters
}
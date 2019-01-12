
const state = {
    products: [
        {name: 'iPhone X',price: 1100},
        {name: 'Samsung S9',price: 850},
        {name: 'OnePlus 6',price: 530},
    ],
    title: 'Vuex state title',
    links: [
        'Google',
        'Facebook',
        'Amazon'
    ]
};

const getters = {
    products: (state) => {
        return state.products.map( products => {
            return products;
        });
    },
    linksCount: state => {
        return state.links.length
    },
};

const mutations = {
    ADD_LINK: (state,link) => {
        state.links.push(link)
    },

    REMOVE_LINK: (state,link) => {
        state.links.splice(link,1)
    },
    REMOVE_ALL: state => {
        state.links = []
    }
};

const actions = {
    removeLink: (context,link) => {
        context.commit('REMOVE_LINK',link)
    },

    removeAll({commit}){
        return new Promise((resolve,reject) => {
            setTimeout(function(){
                commit('REMOVE_ALL')
                resolve()
            },1500)
        })
    }
};

export {
    state,
    getters,
    mutations,
    actions
}

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
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
        ],
        isLogged: true
    },
    getters: {
        products: (state) => {
            return state.products.map( products => {
               return products;
            });
        },
        linksCount: state => {
            return state.links.length
        },
        isLogged: state => {
            return state.isLogged
        }
    },
    mutations:{
        reducePrice: (state) => {
            state.products.forEach(product => {
                product.price -= 1
            })
        },
        ADD_LINK: (state,link) => {
            state.links.push(link)
        },

        REMOVE_LINK: (state,link) => {
            state.links.splice(link,1)
        },
        REMOVE_ALL: state => {
            state.links = []
        }

    },
    actions:{
        reducePrice: context => {
            setTimeout(function(){
                context.commit('reducePrice')
            },1000)
        },

        removeLink: (context,link) => {
            context.commit('REMOVE_LINK',link)
        },

        removeAll({commit}){
            return new Promise((resolve,reject) => {
                setTimeout(function(){
                    commit('REMOVE_ALL')
                    resolve();
                },1500)

            })
        }

    }

});

import config from '../../config'
import axios from 'axios'
import users from './users';

const state = {
    clans: {},
    clans_members: {},
    clan_title: 'Ninja Clans',
    clan_description: 'A clan, in the loosest sense of the term, refers to a family or group of shinobi who form a' +
        ' basic unit of a shinobi village. A majority of these clans were mercenary military forces ' +
        'even before the First Shinobi World War.',
};

const getters = {
    getClans: async (state) => {
        let token = users.getters.getToken;
        return await axios.post(config.api + 'clans',{token})
    },
    getClanTitle: state => {
        console.log(state.clans)
        return state.clans
    },
    getClanMembers: async (state,id) => {
        console.log("** ",id)
        let token = users.getters.getToken;
    }
};

const mutations = {
    async GET_CLAN_MEMBERS({commit},id){
        let token = users.getters.getToken;
        return await axios.post(config.api + 'clans/' + id,{token})
    },
};

const actions = {

};

export default{
    state,
    actions,
    mutations,
    getters
}


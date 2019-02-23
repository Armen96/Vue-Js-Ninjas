import config from '../../config/config'
import axios from 'axios'
import users from './user/store';

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
        return state.clans
    },
    getClanMembers: async (state,id) => {
        console.log("** ",id)
        let token = users.getters.getToken;
    }
};

const mutations = {

};

const actions = {
    async GET_CLAN_MEMBERS({commit},id){
        let token = users.getters.getToken;
        return await axios.post(config.api + 'clans/' + id,{token})
    },

    async UPLOAD_IMAGE({commit},formData){
        let options = {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        };

        return await axios.post( config.api +'upload-file',formData,options)
    }
};

export default{
    // namespaced:true,
    state,
    actions,
    mutations,
    getters
}


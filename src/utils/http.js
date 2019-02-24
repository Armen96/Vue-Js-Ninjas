import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { API_ROOT } from '../config/env'
import { getLocalStorage } from './localStorage'

let isLoggedToken = getLocalStorage('token');
let isLoggedTokenBoolean = !!isLoggedToken;

Vue.use(VueAxios, axios.create({
    // baseURL: API_ROOT,
    headers: { Accept: 'application/json' },
}));

// Vue.axios.defaults.baseURL = API_ROOT;

const success = (resolve, response) => resolve(response.data);
const error = (reject, err) => reject(err);

const request = (method, url, data, config = {}) => new Promise((resolve, reject) => {
    if (!(['get', 'post', 'put', 'patch', 'delete'].includes(method))) throw new Error(`Http method ${method} does not supported`);

    if(isLoggedTokenBoolean){
        config['token'] = isLoggedToken;
    }

    if (['post', 'put', 'patch', 'delete'].includes(method)) {
        return Vue.axios({
            method,
            url,
            data,
            ...config,
        }).then(resp => success(resolve, resp))
            .catch(r => error(reject, r));
    }

    return Vue.axios({
        method,
        url,
        params: data,
        ...config,
    })
        .then(resp => success(resolve, resp))
        .catch(r => error(reject, r));
});


export const _get = (url,data,config) => request('get',API_ROOT + url,data,config);
export const _post = (url,data,config) => request('post',API_ROOT + url,data,config);
export const _put = (url,data,config) => request('put',API_ROOT + url,data,config);
export const _patch = (url,data,config) => request('patch',API_ROOT + url,data,config);
export const _delete = (url,data,config) => request('delete',API_ROOT + url,data,config);

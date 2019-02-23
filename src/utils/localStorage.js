import {warn} from './logger'
let memoryStorage = {};

export const setLocalStorage = (key,value) => {
    try {
        memoryStorage[key] = value;
        localStorage.setItem(key,value)
    } catch (e) {
        warn(`Error on setting localStorage by ${key} key!`)
    }
};

export const getLocalStorage = (key) => {
    try {
        return localStorage.getItem(key);
    } catch (e) {
        warn(`Error on getting localStorage by name ${key} (${e})`)
        return memoryStorage[key] || null
    }

};

export const removeLocalStorage = (name) => {
    try {
        delete memoryStorage[name];
        localStorage.removeItem(name);
    } catch (error) {
        warn(`Error on removing localStorage by ${key} key!`);
    }
};

export const clearLocalStorage = () => {
    try {
        memoryStorage = {};
        localStorage.clear();
    } catch (e) {
        warn(`Error on clearing localStorage!`)
    }
};
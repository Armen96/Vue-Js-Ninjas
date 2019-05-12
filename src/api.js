import {_get, _post, _put, _patch,_delete} from './utils/http';


/*-------------- Authentication ---------------*/

export const register = (data) => _post('register',data);
export const login = (data) => _post('login',data);
export const logout = (data) => _post('logout',data);


/*-------------- Books ---------------*/

export const getBooks = () => _get('books');



/*-------------- Contact Us ---------------*/


export const contactUs = (data) => _post('contact-us',data);






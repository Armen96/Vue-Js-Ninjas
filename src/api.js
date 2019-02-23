import {_get, _post, _put, _patch,_delete} from './utils/http';


export const getBooks = () => _get('books');
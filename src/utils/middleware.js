import { getLocalStorage } from './localStorage'

export const checkAuthentication = (router) => {
    let isLoggedToken = getLocalStorage('token');
    let isLoggedTokenBoolean = !!isLoggedToken;

    router.beforeEach((to, from, next) => {
        if (to.matched.some(record => record.meta.auth)) {
            if (!isLoggedTokenBoolean) {
                next({
                    path: '/login',
                });
            } else {
                next();
            }
        } else {
            if (isLoggedTokenBoolean) {
                if(to.path === '/login' || to.path === '/register'){
                    next({
                        path: '/about',
                    });
                }
            }

            next();
        }
    });
};
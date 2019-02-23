import { getLocalStorage } from './localStorage'

export const checkAuthentication = (router) => {
    let isLoggedToken = getLocalStorage('token')
    router.beforeEach((to, from, next) => {
        if (to.matched.some(record => record.meta.auth)) {
            if (!isLoggedToken) {
                next({
                    path: '/login',
                });
            } else {
                next();
            }
        } else {
            if (isLoggedToken) {
                if(to.path === '/login' || to.path === '/register'){
                    next({
                        path: '/about',
                    });
                }
            }

            next();
        }
    });
}
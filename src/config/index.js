// config/index.js
module.exports = {
    // ...
    dev: {
        proxyTable: {
            // proxy all requests starting with /api to jsonplaceholder
            '/api': {
                target: "http://ninjas-api.ec",
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
};
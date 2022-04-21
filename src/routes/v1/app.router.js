
const Router = (fastify, opts, next) => {

    fastify.get('/', (req, res) => {
        return {
            test: 'ok'
        }
    })

    next();
}

module.exports = {
    options: {
        prefix: '/apps'
    },
    Router
}
const Fastify = require('fastify');


const Build = async (__awaiter) => {
    await __awaiter();

    const fastify = Fastify();

    fastify.register(require('fastify-cors'), config.server.cors)

    return fastify;
}

module.exports = Build;
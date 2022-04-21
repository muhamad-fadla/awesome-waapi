const Fastify = require('fastify');
const glob = require('fast-glob');
const path = require('path');
const { mergeDeep } = require('../helpers');

/**
 * Register Route
 * 
 * @param {String} prefix The prefix of the route
 * @param {Fastify} fastify The fastify instance
 * @param {String} links The glob pattern of the route
 */
const registerRoute = async (prefix, fastify, links) => {
    let routes = await glob(links);

    routes.forEach(route => {
        let router = require(route);

        fastify.register(router.Router, mergeDeep({}, router.options, {
            prefix: path.join(prefix, router.options?.prefix ?? '')
        }));
    })
}

/**
 * Build Server
 * 
 * @param {Function} __awaiter The async function to be awaited
 * @returns {Fastify} fastify instance
 */
const Build = async (__awaiter) => {
    await __awaiter();

    const fastify = Fastify();

    fastify.register(require('fastify-cors'), config.server.cors)

    await registerRoute('/api/v1', fastify, path.join(__dirname, '../routes/v1/**'));


    return fastify;
}

module.exports = Build;
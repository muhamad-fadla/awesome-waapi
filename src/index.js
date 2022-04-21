const Build = require("./bin/www");
const defaultConfig = require("./config");
const { mergeDeep } = require("./helpers");

const Container = (newConfig = {}) => {

    global.config = mergeDeep({}, defaultConfig, newConfig);

    return {
        fly() {
            Build(async () => {

            }).then(fastify => {
                fastify.listen(config.server.port, config.server.host, (er) => {
                    if (er) throw er;

                    console.log(`Container was run on ${config.server.https ? 'https' : 'http'}://${config.server.host + ':' + config.server.port}`)
                })
            }).catch(er => {
                throw er;
            })
        }
    }
}


module.exports = Container;
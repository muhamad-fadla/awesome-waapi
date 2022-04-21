const path = require('path')

module.exports = {

    server: {
        port: 3000,
        host: '0.0.0.0',
        https: false,

        cors: {
            origin: '*',
            methods: ['GET', 'PUT', 'POST', 'DELETE']
        }
    },

    /**
     * Database Configuration
     * 
     * @driver sqlite
     */
    database: {
        // driver
        client: 'sqlite3',

        connection: {
            filename: path.join(__dirname, 'database/iloveyou.db3')
        },

        useNullAsDefault: true,

        migrations: {
            directory: path.join(__dirname, 'database/migrations')
        },

        seeds: {
            directory: path.join(__dirname, 'database/seeds')
        }
    }
}
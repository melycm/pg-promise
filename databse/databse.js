const promise = require('bluebird')

const initOptions = {
    promiseLib: promise,
};

const config = {
    host: 'localhost',
    port: 5432,
    database: 'music2',
    user: 'postgres'
}

// Load and initialize pg-promise
const pgp = require('pg-promise')(initOptions);

// Create the database instance
const db = pgp(config);

module.exports = db;
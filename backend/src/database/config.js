const configuration = require('../../knexfile');

module.exports = function config() {
    return process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;
}

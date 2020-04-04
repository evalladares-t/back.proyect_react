const {Router} = require('express');

const categoria = require('./categoria.routes');
const route = Router();

module.exports = function() {

    route.use('/api/categoria',categoria());
    return route;
};








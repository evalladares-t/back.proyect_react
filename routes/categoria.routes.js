const {Router} = require('express');
const {categoriaController} = require('../controller');

const route = Router();

module.exports = function () {

    route.get('/',categoriaController.index);
    route.post('/',categoriaController.store);

    return route;
};

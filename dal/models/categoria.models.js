const Sequelize = require('sequelize');
const db = require('../');
//const slug = require('slug');
//const shortid = require('shortid');

const Categoria  = db.define('categoria',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nom:{
        type:Sequelize.STRING(150)
    }
});

module.exports = Categoria;
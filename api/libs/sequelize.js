// Traemos la dependencia
const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setupModels = require('../db/models')

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
// URL completa de conexion
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

// Creamos una instacia de sequelize
const sequelize = new Sequelize(URI, {
  dialect: 'mysql',
  logging: true,
});

setupModels(sequelize);

module.exports = sequelize

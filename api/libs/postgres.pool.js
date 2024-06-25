const { Pool } = require('pg');

// Importamos el archivo con las variables de entorno
const { config } = require('../config/config')

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
// URL completa de conexion
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

  const pool = new Pool({ connectionString: URI });

module.exports = pool;

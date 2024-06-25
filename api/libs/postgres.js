const { Client } = require('pg');

async function getConnection(){
  // Creamos una instacnia para la conexion
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'kika',
    password: 'admin123',
    database: 'my_store'
  });

  // Simplemente conectamos el cliente
  await client.connect();
}

module.exports = getConnection;

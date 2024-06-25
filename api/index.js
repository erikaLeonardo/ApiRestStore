const express = require('express');
const routerApi = require('./routes');
// Importamos la libreria
const cors = require('cors');
const { chackApiKey } = require('./middlewares/auth.handler');

// Se importan los middlewares
const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

//indicamos que use el middleware
app.use(express.json());

// Creamos un array
// Indica que estos son los rigenes de los cuales si quiero recibir peticiones
const whitelist = ['http://localhost:8080', 'https://myapp.com'];
const options = {
  // Acceso permitido
  origin: (prigin, callback) => {
    if(whitelist.includes(origin)){
      callback(null, true);
    }else{
      // Acceso no permitido
      callback(new Error('no permitido'));
    }
  }
}
// Indicamos que queremos usarla
// Aqui esta indicando quq quiere habilitar cualquier origen
app.use(cors());

require('./utils/auth');

app.get('/api', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/api/nueva-ruta', chackApiKey, (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);

// Indicamos que use los middlewares
// Es importante el orden en el que se esten ejecutando
// Asi como se esten colocando sera el orden el que se ejecutaran
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  console.log('Mi port' +  port);
});

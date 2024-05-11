const express = require('express');
const routerApi = require('./routes');

// Se importan los middlewares
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 3000;

//indicamos que use el middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);

// Indicamos que use los middlewares
// Es importante el orden en el que se esten ejecutando
// Asi como se esten colocando sera el orden el que se ejecutaran
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  console.log('Mi port' +  port);
});

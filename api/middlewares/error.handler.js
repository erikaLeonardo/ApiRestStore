const { ValidationError } = require("sequelize");
const { stack } = require("../routes/publicacion.router");

// Se encargara de capturar cualquier error
function logErrors (err, req, res, next){
  // Para comprobar
  console.log('logErrors');
  console.error(err);
  // con este next lo estamos identificando como un middleware de tipo error
  // cuando le estamos enviando un error
  next(err);
}

// Este detectara un error pero creara un formato para devolverlo al cliente
// Aunque no se use Next, se debe colocar asi detecta que es para errores
function errorHandler(err, req, res, next){
  console.log('errorHandler');
  res.status(500).json({
    // Tenemos el mensaje del error
    message: err.message,
    // Enviamos el stack del error para saber donde ocurrio
    stack: err.stack,
  });
}

function boomErrorHandler(err, req, res, next){
  // Cuando es generado por Boom, este agrega la propiedad isBoom
  if(err.isBoom){
    // Como sabemos que es de tipo boom
    const { output } = err;
    // Detenemos el error
    res.status(output.statusCode).json(output.payload);
  } else {
    // Si no es boom, ejecutara otro tipo de middleware
    next(err);
  }
}

function ormErrorHandler(err, req, res, next){
  if (err instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      message: err.name,
      error:err.errors
    });
  }
  next(err);
}

module.exports = { logErrors, errorHandler, boomErrorHandler, ormErrorHandler }

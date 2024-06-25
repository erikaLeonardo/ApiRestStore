const express = require('express');

const publicacionRouter = require('./publicacion.router');
const categoriesRouter = require('./categories.router');
const usuarioRouter = require('./usuario.router');
const comentarioRouter = require('./comentario.router');
const tipoprivacidadRouter = require('./tipo_privacidad.router');
const authRouter = require('./auth.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/publicacion', publicacionRouter);
  router.use('/categories', categoriesRouter);
  router.use('/usuario', usuarioRouter);
  router.use('/comentarios', comentarioRouter);
  router.use('/tipoprivacidad', tipoprivacidadRouter);
  router.use('/auth', authRouter);

}

module.exports = routerApi;

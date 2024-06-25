const express = require('express');

const ComentarioService = require('../services/comentario.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createComentarioSchema, updateComentarioSchema, getComentarioSchema } = require('../schemas/comentario.schema');

const router = express.Router();
const service = new ComentarioService();

router.get('/', async (req, res) => {
  const comentarios = await service.find();
  res.json(comentarios);
});

router.get('/:id',
  validatorHandler(getComentarioSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const comentario = await service.findOne(id);
      res.json(comentario);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createComentarioSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newComentario = await service.create(body);
      res.status(201).json(newComentario);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getComentarioSchema, 'params'),
  validatorHandler(updateComentarioSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const comentario = await service.update(id, body);
      res.json(comentario);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getComentarioSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await service.delete(id);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;

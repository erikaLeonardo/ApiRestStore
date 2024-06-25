const Joi = require('joi');

const id_comentario = Joi.number().integer();
const id_publicacion = Joi.number().integer();
const id_usuario = Joi.number().integer();
const texto = Joi.string().min(1).max(500);
const fecha_comentario = Joi.date();

const createComentarioSchema = Joi.object({
  id_publicacion: id_publicacion.required(),
  id_usuario: id_usuario.required(),
  texto: texto.required(),
  fecha_comentario: fecha_comentario.required()
});

const updateComentarioSchema = Joi.object({
  id_publicacion,
  id_usuario,
  texto,
  fecha_comentario
});

const getComentarioSchema = Joi.object({
  id_comentario: id_comentario.required()
});

module.exports = { createComentarioSchema, updateComentarioSchema, getComentarioSchema };

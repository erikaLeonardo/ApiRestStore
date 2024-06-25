const { models } = require('../libs/sequelize');

class ComentarioService {
  async find() {
    const rta = await models.Comentario.findAll();
    return rta;
  }

  async findOne(id) {
    const comentario = await models.Comentario.findByPk(id);
    if (!comentario) {
      throw boom.notFound('comentario not found');
    }
    return comentario;
  }

  async create(data) {
    const newComentario = await models.Comentario.create(data);
    return newComentario;
  }

  async update(id, changes) {
    const comentario = await this.findOne(id);
    const rta = await comentario.update(changes);
    return rta;
  }

  async delete(id) {
    const comentario = await models.Comentario.findByPk(id);
    if (!comentario) {
      throw boom.notFound('comentario not found');
    }
    await comentario.destroy();
    return { id };
  }
}

module.exports = ComentarioService;

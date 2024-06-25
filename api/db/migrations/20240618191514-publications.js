
'use strict';

const { PublicacionSchema, PUBLICACION_TABLE } = require('../models/publicacion.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(PUBLICACION_TABLE, PublicacionSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(PUBLICACION_TABLE);
  }
};

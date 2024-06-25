'use strict';

const { Tipo_Privacidad_Schema, TIPO_PRIVACIDAD_TABLE } = require('../models/tipo_privacidad.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(TIPO_PRIVACIDAD_TABLE, Tipo_Privacidad_Schema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(TIPO_PRIVACIDAD_TABLE);
  }
};

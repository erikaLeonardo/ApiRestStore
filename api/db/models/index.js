const { Usuario, UsuarioSchema } = require('./usuario.model');
const { TipoPrivacidad, Tipo_Privacidad_Schema } = require('./tipo_privacidad.model');
const { Publicacion, PublicacionSchema } = require('./publicacion.model');

function setupModels(sequelize) {
  Usuario.init(UsuarioSchema, Usuario.config(sequelize));
  TipoPrivacidad.init(Tipo_Privacidad_Schema, TipoPrivacidad.config(sequelize));
  Publicacion.init(PublicacionSchema, Publicacion.config(sequelize));


  // Asocia los modelos después de inicializarlos
  Usuario.associate(sequelize.models);
  TipoPrivacidad.associate(sequelize.models);
  Publicacion.associate(sequelize.models);

}

module.exports = setupModels;

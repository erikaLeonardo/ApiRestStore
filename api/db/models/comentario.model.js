const { Model, DataTypes } = require('sequelize');

const COMENTARIO_TABLE = 'comentarios';

const ComentarioSchema = {
    id_comentario: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    id_publicacion: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    id_usuario: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    texto: {
        allowNull: false,
        type: DataTypes.STRING
    },
    fecha_comentario: {
        allowNull: false,
        type: DataTypes.DATE
    }
};

class Comentario extends Model {
    static associate() {
      //associate
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: COMENTARIO_TABLE,
            modelName: 'Comentario',
            timestamps: false
        };
    }
}

module.exports = { COMENTARIO_TABLE, ComentarioSchema, Comentario };

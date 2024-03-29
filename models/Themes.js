module.exports = function(sequelize, DataTypes) {
  return sequelize.define('themes', {
    id_theme: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    name_theme: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description_theme: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    playable: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    quizz_id_themes: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
      references: {
        // This is a reference to another model
        model: 'quizz',
        // This is the column name of the referenced model
        key: 'id_quizz'
      }
    }
  });
};

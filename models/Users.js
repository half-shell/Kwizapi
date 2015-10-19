module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id_user: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    pseudo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: true
    },
    score_user: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    victories: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    defeats: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    questions_added: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    creation_user: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 'CURRENT_TIMESTAMP'
    },
    quizz_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        // This is a reference to another model
        model: 'quizz',
        // This is the column name of the referenced model
        key: 'id_quizz'
      }
    }
  });
};

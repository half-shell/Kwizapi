module.exports = function(sequelize, DataTypes) {
  return sequelize.define('games', {
    id_game: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    score_1: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    score_2: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    round: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    is_finished: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    creation_game: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 'CURRENT_TIMESTAMP'
    },
    user_id_1: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        // This is a reference to another model
        model: 'users',
        // This is the column name of the referenced model
        key: 'id_user'
      }
    },
    user_id_2: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        // This is a reference to another model
        model: 'users',
        // This is the column name of the referenced model
        key: 'id_user'
      }
    },
    current_player: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        // This is a reference to another model
        model: 'users',
        // This is the column name of the referenced model
        key: 'id_user'
      }
    }
  });
};

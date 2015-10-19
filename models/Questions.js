module.exports = function(sequelize, DataTypes) {
  return sequelize.define('questions', {
    id_question: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    value_question: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    // good_rep: {
    //   type: DataTypes.TEXT,
    //   allowNull: false
    // },
    // bad_rep1: {
    //   type: DataTypes.TEXT,
    //   allowNull: false
    // },
    // bad_rep2: {
    //   type: DataTypes.TEXT,
    //   allowNull: false
    // },
    // bad_rep3: {
    //   type: DataTypes.TEXT,
    //   allowNull: false
    // },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 'CURRENT_TIMESTAMP'
    },
    valid: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    rejected: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    reject_reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    theme_id: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
      references: {
        // This is a reference to another model
        model: 'themes',
        // This is the column name of the referenced model
        key: 'id_theme'
      }
    },
    user_id: {
      type: DataTypes.BIGINT(11),
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

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('responses', {
    id_response: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    is_true: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    question_id: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
      references: {
        // This is a reference to another model
        model: 'questions',
        // This is the column name of the referenced model
        key: 'id_question'
      }
    }
  });
};

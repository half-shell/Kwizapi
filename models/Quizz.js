module.exports = function(sequelize, DataTypes) {
  return sequelize.define('quizz', {
  	id_quizz: { 
  		type: DataTypes.BIGINT(11), 
  		primaryKey: true
  	},
    name_quizz: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    code_quizz: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        // This is a reference to another model
        model: 'users',
        // This is the column name of the referenced model
        key: 'id_user'
      }
    }
  },{
  	freezeTableName: true,
  });
};

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('quizz', {
  	id_quizz: { type: DataTypes.BIGINT(11), primaryKey: true},
    name_quizz: DataTypes.TEXT,
    code_quizz: DataTypes.BIGINT(6),
    user_id: DataTypes.BIGINT(11)
  },{
  	freezeTableName: true,
  });
};

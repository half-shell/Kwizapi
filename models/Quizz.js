module.exports = function(sequelize, DataTypes) {
  return sequelize.define('quizz', {
    name_quizz: DataTypes.TEXT,
    code_quizz: DataTypes.BIGINT(6),
    user_id: DataTypes.BIGINT(11)
  },{
  	freezeTableName: true,
  });
};

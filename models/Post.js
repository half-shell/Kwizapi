module.exports = function(sequelize, DataTypes) {
  return sequelize.define('themes', {
    id_themes: DataTypes.BIGINT(11),
    
    quizz_id_themes: DataTypes.BIGINT(11),
    name_theme: DataTypes.TEXT,
    description_theme: DataTypes.TEXT,
    playable: DataTypes.BOOLEAN 
  });
};

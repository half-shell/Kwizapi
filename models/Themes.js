module.exports = function(sequelize, DataTypes) {
  return sequelize.define('themes', {
    id_theme: { type: DataTypes.BIGINT(11), primaryKey: true},
  	quizz_id_themes: {
   		type: DataTypes.BIGINT(11),

   		references: {
     		// This is a reference to another model
     		model: 'quizz',
     		// This is the column name of the referenced model
     		key: 'id'
   		}
 		},
    name_theme: DataTypes.TEXT,
    description_theme: DataTypes.TEXT,
    playable: DataTypes.BOOLEAN 
  });
};

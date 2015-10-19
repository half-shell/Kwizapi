// Base setup
var Sequelize = require('sequelize');

// DB setup
var sequelize = new Sequelize('kwizybo_api', 'root', 'root', {
  host: 'localhost',
  port: 8889,
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});

// Listing models
var models = [
  'Themes',
  'Quizz',
  'Games',
  'Questions',
  'Responses',
  'Users'
];

// Exporting models via sequelize module
models.forEach(function (model) {
  module.exports[model] = sequelize.import(__dirname + '/' + model);
});

(function(m) {

  m.Themes.belongsTo(m.Quizz, {foreignKey: 'quizz_id_themes'});
  //m.Quizz.hasMany(m.Themes, {foreignKey: 'quizz_id_themes'});

  m.Responses.belongsTo(m.Questions, {foreignKey: 'question_id'});
  // m.Questions.hasMany(m.Responses, {foreignKey: 'question_id'});
 
  m.Games.belongsTo(m.Users, {foreignKey: 'user_id_1'});

  m.Games.belongsTo(m.Users, {foreignKey: 'user_id_2'});

  m.Games.belongsTo(m.Users, {foreignKey: 'current_player'});

  m.Quizz.belongsTo(m.Users, {foreignKey: 'user_id'})

  m.Questions.belongsTo(m.Themes, {foreignKey: 'theme_id'});

  m.Questions.belongsTo(m.Users, {foreignKey: 'user_id'});

  // m.Users.hasOne(m.Quizz, {foreignKey: 'quizz_id'})


})(module.exports);

module.exports.sequelize = sequelize;

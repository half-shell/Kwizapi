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
  'Quizz'
];

// Exporting models via sequelize module
models.forEach(function (model) {
  module.exports[model] = sequelize.import(__dirname + '/' + model);
});

(function(m) {
  m.Themes.belongsTo(m.Quizz, {foreignKey: 'quizz_id_themes'});
  m.Quizz.hasMany(m.Themes, {foreignKey: 'quizz_id_themes'});
})(module.exports);

module.exports.sequelize = sequelize;

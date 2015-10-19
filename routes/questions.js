var express = require('express')
  , router = express.Router();

var models = require('../models');

// Getting a model is that simple
var Questions = models.Questions;
var Responses = models.Responses;

// router.route('/quizz/:quizz_id/themes')
//   .post(function(req, res) {
//     var themes = Themes.build({
//       quizz_id_themes: req.params.quizz_id,
//       name_theme: req.body.name_theme,
//       description_theme: req.body.description_theme,
//       playable: false
//     });
//     themes.save().catch(function (err) {
//         res.send(err);
//     });
//     res.send({ message: 'The themes has been succesfully added' });
//   })

//   .get(function(req, res) {
//     Themes.findAll({
//       where: {
//         quizz_id_themes: req.params.quizz_id
//       }
//       // ,include: [{model: Quizz, required: true}]

//     }).then(function (err, themes) {
//       if(err)
//         res.send(err);
//       res.send(themes);
//     });
//   });

module.exports = router;

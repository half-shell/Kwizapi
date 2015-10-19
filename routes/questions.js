var express = require('express')
  , router = express.Router();

var models = require('../models');

// Getting a model is that simple
var Questions = models.Questions;
var Responses = models.Responses;
var Themes = models.Themes;


router.route('/quizz/:quizz_id/questions');
  // .post(function(req, res) {
  //   var themes = Themes.build({
  //     quizz_id_themes: req.params.quizz_id,
  //     name_theme: req.body.name_theme,
  //     description_theme: req.body.description_theme,
  //     playable: false
  //   });
  //   themes.save().catch(function (err) {
  //       res.send(err);
  //   });
  //   res.send({ message: 'The themes has been succesfully added' });
  // })

router.route('/quizz/:quizz_id/valid_questions')
  .get(function(req, res) {
    Questions.findAll({
      where: {
      	valid: true
      }
      ,include: [
      	{
      		model: Responses, 
      		required: true,
      		attributes: ['value','is_true']
      	},{
      		model: Themes,
      		required: false,
      		attributes: ['quizz_id_themes','name_theme'],
      		where:{
      			quizz_id_themes: req.params.quizz_id
      		}
      	}]
    }).then(function (err, questions) {
      if(err)
        res.send(err);
      res.send(questions);
    });
  });

router.route('/quizz/:quizz_id/unvalid_questions')
  .get(function(req, res) {
    Questions.findAll({
      where: {
      	valid: false,
      	rejected: false
      }
      ,include: [
      	{
      		model: Responses, 
      		required: true,
      		attributes: ['value','is_true']
      	},{
      		model: Themes,
      		required: false,
      		attributes: ['quizz_id_themes','name_theme'],
      		where:{
      			quizz_id_themes: req.params.quizz_id
      		}
      	}]
    }).then(function (err, questions) {
      if(err)
        res.send(err);
      res.send(questions);
    });
  });

router.route('/quizz/:quizz_id/themes/:theme_id/questions')

  .get(function(req, res) {
    Questions.findAll({
      where: {
        theme_id: req.params.theme_id
      }
      ,include: [
      	{model: Responses, required: true, attributes: ['value','is_true']},
      	{model: Themes, required: false, attributes: ['quizz_id_themes','name_theme'], where:{quizz_id_themes: req.params.quizz_id }}
      ]
    }).then(function (err, questions) {
      if(err)
        res.send(err);
      res.send(questions);
    });
  });

module.exports = router;

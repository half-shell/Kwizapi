var express = require('express')
  , router = express.Router();

var models = require('../models');

// Getting a model is that simple
var Themes = models.Themes;
//var Quizz = models.Quizz;

router.route('/quizz/:quizz_id/themes')
  .post(function(req, res) {
    var themes = Themes.build({
      quizz_id_themes: req.params.quizz_id,
      name_theme: req.body.name_theme,
      description_theme: req.body.description_theme,
      playable: false
    });
    themes.save().catch(function (err) {
        res.send(err);
    });
    res.send({ message: 'The themes has been succesfully added' });
  })

  .get(function(req, res) {
    Themes.findAll({
      where: {
        quizz_id_themes: req.params.quizz_id
      }
      // ,include: [{model: Quizz, required: true}]

    }).then(function (err, themes) {
      if(err)
        res.send(err);
      res.send(themes);
    });
  });

router.route('/quizz/:quizz_id/themes/:id_themes')

  .get(function(req, res) {
    Themes.find({
      where: {
        quizz_id_themes: req.params.quizz_id,
        id_theme: req.params.id_themes
      }
      // ,include: [{model: Quizz, required: true}]
    }).then(function (err, themes) {
      if(err)
        res.send(err);

      res.send(themes);
    });
  })

  .put(function(req, res) {
    Themes.find({
      where: {
        quizz_id_themes: req.params.quizz_id,
        id_theme: req.params.id_themes
      }
    }).then(function (themes, err) {
      if(err)
        res.send(err);

      themes.update({
        quizz_id_themes: req.body.quizz_id_themes,
        name_theme: req.body.name_theme,
        description_theme: req.body.description_theme,
        playable: req.body.playable
      }).catch(function(err) {
        res.send(err);
      });
      res.send({ message: 'Themes has been succesfully updated' });
    });
  });


module.exports = router;

var express = require('express')
  , router = express.Router();

var models = require('../models');

// Getting a model is that simple
var Quizz = models.Quizz;


router.route('/quizz')

  .post(function(req, res) {
    var quizz = Quizz.build({
      name_quizz: req.body.name_quizz,
      user_id: req.body.user_id,
      code_quizz: Math.floor(Math.random()*(999999-100000+1)+100000)
    });

    quizz.save().catch(function (err) {
        res.send(err);
    });
    res.send({ message: 'The themes has been succesfully added' });
  })

  .get(function(req, res) {
    Quizz.findAll().then(function (err, quizz) {
      if(err)
        res.send(err);
      res.send(quizz);
    });
  });

router.route('/quizz/:quizz_id')

  .get(function(req, res) {
    Quizz.find({
      where: {
        id_quizz: req.params.quizz_id
      }
    }).then(function (err, quizz) {
      if(err)
        res.send(err);

      res.send(quizz);
    });
  })

  .put(function(req, res) {
    Quizz.find({
      where: {
        id_quizz: req.params.quizz_id
      }
    }).then(function (quizz, err) {
      if(err)
        res.send(err);

      quizz.update({
        name_quizz: req.body.name_quizz
      }).catch(function(err) {
        res.send(err);
      });
      res.send({ message: 'Themes has been succesfully updated' });
    });
  });

module.exports = router;

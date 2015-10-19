// Base setup
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');

// Configure express to use body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setting server port
var port = 3000;

// DB setup
var sequelize = new Sequelize('kwizybo_api', 'root', 'root', {
  host: 'localhost',
  port: 8889,
  define: {
    timestamps: false
  }
});

// Check database connection
sequelize.authenticate().then(function(err) {
  if(err)
    console.log('Unable to connect to database: ', err);
  console.log('Connected to database.');
});

// Getting all models
var models = require('./models');

// Getting a model is that simple
var Themes = models.Themes;
var Quizz = models.Quizz;

// Basic routing
var router = express.Router();

router.use(function(req, res, next) {
  console.log('Something is happening');
  next();
});

router.get('/', function(req, res) {
  res.json({ message: 'It works' })
});

router.route('/quizz')

  .post(function(req, res) {
    var quizz = Quizz.build({
      name_quizz: req.body.name_quizz,
      user_id: req.body.user_id
    });
    quizz.save().catch(function (err) {
        res.send(err);
    });
    res.send({ message: 'The themes has been succesfully added' });
  })

  .get(function(req, res) {
    Quizz.findAll().then(function (err, themes) {
      if(err)
        res.send(err);
      res.send(quizz);
    });
  });

router.route('/quizz/:quizz_id')

  .get(function(req, res) {
    Quizz.find({
      where: {
        id: req.params.quizz_id
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
        id: req.params.quizz_id
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
        id: req.params.id_themes
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
        id: req.params.id_themes
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

// Registering routes
app.use('/api', router);

// Starting server
app.listen(port);
console.info('Let the magic happen.');

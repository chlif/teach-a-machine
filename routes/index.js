var express = require('express');
var router = express.Router();
var config = require('../knexfile.js');
var knex = require('knex')(config.development);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {  });
});

router.get('/start', function (req, res, next) {
  knex('materials').select('*').then(materials => {
    res.render('start', { materials: materials });
  });
});

router.get('/run/:materialsId', function(req, res, next) {
  knex('materials').select('*').where({ id: req.params.materialsId }).then(materials => {
    if (materials.length === 1) {

      let material = materials[0];
      knex('tags').select('*').where({ materials_id: material.id }).then(tags => {

        if (tags.length > 0) {

          res.render('run', { material: material, tags: tags });

        } else {
          next(new Error("No tags found for dataset: " + material.name));
        }

      });

    } else {
      next(new Error("No dataset found."));
    }
  });
});

module.exports = router;

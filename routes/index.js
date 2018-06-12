var express = require('express');
var router = express.Router();
var config = require('../knexfile.js');
var knex = require('knex')(config.development);
var Materials = require('../models/Materials');
var Tags = require('../models/Tags');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {  });
});

router.get('/start', function (req, res, next) {
  Materials.getAll(materials => {
    res.render('start', { materials: materials });
  }, error => {
    next(new Error("No datasets found."));
  });
});

router.get('/demographic/:materialsId', function (req, res, next) {
  Materials.getById(req.params.materialsId,
    material => {
      res.render('demographic', { material: material });
    }, error => {
      next(error);
    });
});

router.get('/run/:materialsId', function(req, res, next) {
  Materials.getById(req.params.materialsId,
    material => {
      Tags.getByMaterialsId(material.id,
        tags => {
          console.log(tags);
          res.render('run', { material: material, tags: tags });
        },
        error => next(error));
    },
    error => next(error));
});

module.exports = router;

var router = require('express').Router();
var config = require('../knexfile.js');
var knex = require('knex')(config.development);

router.get('/', function(req, res, next) {
  res.json({});
});

router.post('/', function(req, res, next) {
  knex('labels')
    .insert({
      partial: req.body.partial,
      materials_id: req.body.materialsId,
      sentences_id: req.body.sentencesId,
      tags_id: req.body.tagsId,
    }).then(() => {
      res.json({ message: 'New label added.' });
    });
});

module.exports = router;

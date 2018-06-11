var router = require('express').Router();
var config = require('../knexfile.js');
var knex = require('knex')(config.development);

router.get('/', function(req, res, next) {
  knex('materials').select('*').then(materials => {
    res.json(materials);
  });
});

module.exports = router;

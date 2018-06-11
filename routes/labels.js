var router = require('express').Router();
var config = require('../knexfile.js');
var knex = require('knex')(config.development);

router.get('/', function(req, res, next) {
  res.json({});
});

module.exports = router;

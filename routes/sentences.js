var router = require('express').Router();
var config = require('../knexfile.js');
var knex = require('knex')(config.development);

router.get('/:materialsId', function(req, res, next) {
  knex('sentences')
      .select('*')
      .where({ materials_id: req.params.materialsId })
      .then(sentences => {
        res.json(sentences);
      });
});

module.exports = router;

var router = require('express').Router();
var Labels = require('../models/Labels');

router.get('/', function(req, res, next) {
  res.json({});
});

router.post('/', function(req, res, next) {
  Labels.add(
      req.body.partial,
      req.body.materialsId,
      req.body.sentencesId,
      req.body.tagsId
    ).then(() => {
      res.json({ message: 'New label added.' });
    });
});

module.exports = router;

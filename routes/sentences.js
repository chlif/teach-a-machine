var router = require('express').Router();
var Sentences = require('../models/Sentences');

router.get('/:materialsId/random/:numberOfSenteces', (req, res, next) => {
  let numberOfSenteces = parseInt(req.params.numberOfSenteces);
  if (numberOfSenteces > 100) numberOfSenteces = 100;
  if (numberOfSenteces < 10) numberOfSenteces = 10;

  Sentences.getRandomByMaterialsId(req.params.materialsId, numberOfSenteces)
      .then(sentences => res.json(sentences))
      .catch(error => next(error));
});

module.exports = router;

var router = require('express').Router();
var Sentences = require('../models/Sentences');

router.get('/:materialsId', (req, res, next) => {
  Sentences.getByMaterialsId(req.params.materialsId)
      .then(sentences => res.json(sentences))
      .catch(error => next(error));
});

module.exports = router;

var router = require('express').Router();
var Demographics = require('../models/Demographics');

router.post('/', function(req, res, next) {
  if (req.body.materialsId !== undefined) {
    let materialsId = req.body.materialsId;
    let gender = req.body.gender || 'other';
    let ageGroup = req.body.ageGroup || 0;

    Demographics.add(materialsId, gender, ageGroup,
      demographic => {
        res.json({ message: 'new demographic added', id: demographic[0] });
      },
      error => next(error));
  } else {
    next(new Error("No material id set."));
  }
});

module.exports = router;

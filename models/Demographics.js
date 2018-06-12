var dbConfig = require('../knexfile.js');
var environment = process.env.ENV || 'development';
var knex = require('knex')(dbConfig[environment]);

module.exports = {

  add: (materialsId, gender, ageGroup, successCallback, errorCallback) => {
    knex('demographics').insert({
      gender: gender,
      ageGroup: ageGroup,
      materials_id: materialsId
    })
    .then(demographic => successCallback.call(this, demographic))
    .catch(error => errorCallback.call(this, error));
  }

};

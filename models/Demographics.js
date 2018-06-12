var dbConfig = require('../knexfile.js');
var environment = process.env.ENV || 'development';
var knex = require('knex')(dbConfig[environment]);

module.exports = {

  add: (materialsId, gender, ageGroup) => knex('demographics')
    .insert({
      gender: gender,
      ageGroup: ageGroup,
      materials_id: materialsId
    })

};

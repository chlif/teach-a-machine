var dbConfig = require('../knexfile.js');
var environment = process.env.ENV || 'development';
var knex = require('knex')(dbConfig[environment]);

module.exports = {

  add: (partial, materialsId, sentencesId, tagsId) => knex('labels')
    .insert({
      partial: partial,
      materials_id: materialsId,
      sentences_id: sentencesId,
      tags_id: tagsId,
    })

};

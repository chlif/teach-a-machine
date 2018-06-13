var dbConfig = require('../knexfile.js');
var environment = process.env.ENV || 'development';
var knex = require('knex')(dbConfig[environment]);
var Materials = require('./Materials');

module.exports = {

  getRandomByMaterialsId: (materialsId, numberOfSenteces) => {
    return Materials.getById(materialsId)
      .then(material =>
        knex('sentences').select('*')
            .where({ materials_id: material.id })
            .orderByRaw('RAND()')
            .limit(numberOfSenteces)
      );
  }

};

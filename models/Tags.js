var dbConfig = require('../knexfile.js');
var environment = process.env.ENV || 'development';
var knex = require('knex')(dbConfig[environment]);
var Materials = require('./Materials');

module.exports = {

  getByMaterialsId: (materialsId, successCallback, errorCallback) => {
    return Materials.getById(materialsId)
      .then(material => {
        return knex('tags').select('*').where({ materials_id: material.id })
      });
  }

};

var dbConfig = require('../knexfile.js');
var environment = process.env.ENV || 'development';
var knex = require('knex')(dbConfig[environment]);
var Materials = require('./Materials');

module.exports = {

  getByMaterialsId: function(materialsId, successCallback, errorCallback) {
    Materials.getById(materialsId, material => {
        knex('tags').select('*').where({ materials_id: material.id })
          .then(tags => {
            if (tags.length > 0) {
              successCallback.call(this, tags);
            } else {
              errorCallback.call(this, new Error("No tags found."));
            }
          })
          .catch(error => {
            errorCallback.call(this, error);
          });
      },
      errorCallback);
  }

};

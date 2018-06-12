var dbConfig = require('../knexfile.js');
var environment = process.env.ENV || 'development';
var knex = require('knex')(dbConfig[environment]);

module.exports = {

  getAll: (successCallback, errorCallback) => {
    knex('materials').select('*')
      .then(materials => {
          successCallback.call(this, materials);
        }).catch(function (error) {
          errorCallback.call(this, error);
        });
  },

  getById: (id, successCallback, errorCallback) => {
    knex('materials').select('*').where({ id, id })
      .then(materials => {
        if (materials.length === 1) {
            successCallback.call(this, materials[0]);
        } else {
          errorCallback.call(this, new Error("Couldn't find the requested material."));
        }
      }).catch(function (error) {
        errorCallback.call(this, error);
      });
  }

};

var dbConfig = require('../knexfile.js');
var environment = process.env.ENV || 'development';
var knex = require('knex')(dbConfig[environment]);

module.exports = {

  getAll: () => knex('materials').select('*'),

  getById: (id) => knex('materials').select('*').where({ id, id })
    .then(materials => {
      return new Promise((resolve, reject) => {
        if (materials.length === 1) resolve(materials[0]);
        else reject(new Error("Couldn't match materialsId"));
      });
    })

};

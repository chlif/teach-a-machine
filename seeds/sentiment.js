
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('materials').del()
      .then(function () {
        return knex('materials').insert([
          {
            id: 1,
            name: 'Sentiment Analysis Data (in Finnish)',
            instruction: 'Mitä tunnetta tai tunteita löydät seuraavasta lauseesta?'
          }
        ]);
      })

      .then(function() {
        return knex('sentences').del();
      })
      .then(function () {
        return knex('sentences').insert([
          { id: 1, materials_id: 1, sentence: 'Minusta makkara maistuu hyvältä.' },
          { id: 2, materials_id: 1, sentence: 'Tietokantojen rakentaminen on työlästä.' },
          { id: 3, materials_id: 1, sentence: 'Turhauttaa, kun järjestelmä ei synny helposti.' },
          { id: 4, materials_id: 1, sentence: 'Miksi tämä ei ala toimimaan?' },
          { id: 5, materials_id: 1, sentence: 'On hienoa, kun saa tehtyä jotain valmiiksi.' },
          { id: 6, materials_id: 1, sentence: 'Kokeilen vielä yhden lauseen.' },
          { id: 7, materials_id: 1, sentence: 'Hyvältähän tämä alkaa näyttämään.' }
        ]);
      })

      .then(function() {
        return knex('tags').del();
      })
      .then(function () {
        return knex('tags').insert([
          { id: 1, materials_id: 1, name: 'viha' },
          { id: 2, materials_id: 1, name: 'pelko' },
          { id: 3, materials_id: 1, name: 'inho' },
          { id: 4, materials_id: 1, name: 'ilo' },
          { id: 5, materials_id: 1, name: 'suru' },
          { id: 6, materials_id: 1, name: 'yllätys' },
          { id: 7, materials_id: 1, name: 'halveksunta' }
        ]);
      });

};

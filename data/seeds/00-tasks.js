
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          title: "My Birthday Bash", 
          description: "My birthday party on 7th of July, 2019",
          completed: true
        },
        {
          title: "Attend Mike's Wedding", 
          description: "Mike Wedding on 7th of August, 2019"
        },
        {
          title: "PalyMaker's London Tour with the Code_maker", 
          description: "Shutting down London with the PlayMaker this Year on December 1st"
        }
      ]);
    });
};

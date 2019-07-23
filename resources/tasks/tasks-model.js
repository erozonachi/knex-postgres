const db = require('../../data/dbConfig');

module.exports = {
  create: function(task) {
    return db('tasks')
      .insert(task)
      .returning("*");
  },
}

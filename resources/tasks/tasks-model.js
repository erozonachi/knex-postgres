const db = require('../../data/dbConfig');

module.exports = {
  create: function(task) {
    return db('tasks')
      .insert(task)
      .returning("*");
  },

  read: function() {
    return db('tasks');
  },

  update: function(id, changes) {
    return db('tasks')
      .update(changes)
      .where({ id })
      .returning("*");
  }
}

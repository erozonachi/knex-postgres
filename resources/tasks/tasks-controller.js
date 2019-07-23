const model = require('./tasks-model');

module.exports = {
  create: async (req, res) => {
    try {
      const newTask = await model.create(req.body);

      res.status(201)
        .json(newTask);
    } catch(error) {
      res.status(500)
        .json({
          error: 'Server error'
        });
    }
  },

  read: async (req, res) => {
    try {
      const tasks = await model.read();

      res.status(200)
        json(tasks);
    } catch(error) {
      res.status(500)
        .json({
          error: 'Server error'
        });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const task = await model.update(id, req.body);

      res.status(200)
        json(task);
    } catch(error) {
      res.status(500)
        .json({
          error: 'Server error'
        });
    }
  },
};

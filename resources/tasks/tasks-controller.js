const model = require('./tasks-model');

module.exports = {
  create: async (req, res) => {
    try {
      const newTask = await model.create(req.body);

      res.status(201)
        .json(newTask[0]);
    } catch(error) {
      if(error.code === '23505' && error.detail.includes('title')) {
        return res.status(400)
          .json({ message: 'Supplied title field already exists' });
      }
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
        .json(tasks);
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
      if(!task || task.length <= 0) {
        return res.status(404)
          .json({ message: 'Task with the specified id not found' });
      }
      res.status(200)
        .json(task[0]);
    } catch(error) {
      res.status(500)
        .json({
          error: 'Server error'
        });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const task = await model.delete(id);
      if(!task || task.length <= 0) {
        return res.status(404)
          .json({ message: 'Task with the specified id not found' });
      }
      res.status(200)
        .json({
          message: 'Delete successful',
          removed: task[0]
        });
    } catch(error) {
      res.status(500)
        .json({
          error: 'Server error'
        });
    }
  },
};

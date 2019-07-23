const model = require('./tasks-model');

module.exports = {
  create: async (req, res, next) => {
    try {
      const newTask = await model.create(req.body);

      res.status(201)
        .json(newTask[0]);
    } catch(error) {
      next(error);
    }
  },

  read: async (req, res, next) => {
    try {
      const tasks = await model.read();

      res.status(200)
        .json(tasks);
    } catch(error) {
      next(error);
    }
  },

  update: async (req, res, next) => {
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
      next(error);
    }
  },

  delete: async (req, res, next) => {
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
      next(error);
    }
  },
};

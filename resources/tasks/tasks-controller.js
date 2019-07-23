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
  }
};

const express = require('express');
const validator = require('../../helpers/validator');
const controller = require('./tasks-controller');

const tasksRoute = express.Router();

tasksRoute.post('/', validator.validateTask, controller.create);
tasksRoute.get('/', controller.read);
tasksRoute.put('/:id', validator.validateTask, controller.update);
tasksRoute.delete('/:id', controller.delete);

module.exports = tasksRoute;

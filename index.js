const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const tasksRoute = require('./resources/tasks/tasks-route');
const errorHandler = require('./helpers/error-handler');

const server = express();
const port = process.env.PORT || 5000;

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/tasks', tasksRoute);
server.use(errorHandler.handleError);

server.listen(port, () => {
  console.log(`Server running on port:- ${port}`);
});

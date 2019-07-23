const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const tasksRoute = require('./resources/tasks/tasks-route');

const server = express();
const port = process.env.PORT || 5000;

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/tasks', tasksRoute);

server.listen(port, () => {
  console.log(`Server running on port:- ${port}`);
});

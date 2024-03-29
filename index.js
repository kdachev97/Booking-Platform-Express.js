const express = require('express');
const databaseConfig = require('./config/database');
const expressConfig = require('./config/express');
const routesConfig = require('./config/routes');


async function start() {
  const port = 3000;
  const app = express();

  expressConfig(app);
  routesConfig(app);
  await databaseConfig(app);

  app.listen(port, () => console.log(`Server listening on port ${port}`));
}

start();
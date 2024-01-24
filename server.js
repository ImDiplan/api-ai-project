const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const uuid = require('uuid');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const apiKeyMiddleware = require('./apiKey');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get('/', (req, res) => {
    res.redirect('/api-docs');
  });
  app.use('/movies', apiKeyMiddleware, routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

process.on('uncaughtException', function (err) {
  console.log('Caught exception: ', err);
  process.exit(1);
});

module.exports = app;

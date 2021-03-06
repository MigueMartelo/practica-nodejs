const express = require('express');
const bodyParser = require('body-parser');

const swaggerUI = require('swagger-ui-express');

const config = require('../config.js');
const user = require('./components/user/network');
const auth = require('./components/auth/network');
const post = require('./components/post/network');
const errors = require('../network/errors');

const app = express();

// Body-parser config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const swaggerDoc = require('./swagger.json');

// ROUTES
app.use('/api/user', user);
app.use('/api/auth', auth);
app.use('/api/post', post);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.use(errors);

app.listen(config.api.port, () => {
  console.log('Escuchando en el puerto ', config.api.port);
});

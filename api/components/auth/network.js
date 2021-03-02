const express = require('express');

const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

router.post('/login', function (req, res) {
  Controller.login(req.body.username, req.body.password)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((err) => {
      response.error(req, res, 'Información invalida', 400);
    });
});

module.exports = router;

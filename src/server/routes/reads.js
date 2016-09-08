const router = require('express').Router();
const knex = require('../db/knex');

router.get('/', function (req, res, next) {
  res.send('good to go');
});

module.exports = router;

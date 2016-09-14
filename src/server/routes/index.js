const router = require('express').Router();

const indexController = require('../controllers/index');

router.get('/', function (req, res, next) {
  res.send('index');
});

module.exports = router;

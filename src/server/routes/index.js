const router = require('express').Router();

const indexController = require('../controllers/index');

router.get('/', function (req, res, next) {
  res.redirect('/read');
});

module.exports = router;

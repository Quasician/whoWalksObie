var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'xpress' });
});

// POST homepage
router.post('/', function(req, res, next){
  console.log(req.body);
  res.render('index', { title: req.body["TimeStamp"]});
  res.status(200).end();
});

module.exports = router;

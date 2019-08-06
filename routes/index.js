var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// prints post request body to console
router.post('/', function(req, res, next){
  console.log(req.body);
  res.status(200).end();
});

module.exports = router;

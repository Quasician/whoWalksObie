var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  /*const request = require('request');
  var options = {
    url: 'https://jeyvj7tvwe.execute-api.us-east-2.amazonaws.com/Gamma/getLastTime',
    headers: {
      "x-api-key" : "FVTP4xt1vA5Gb66gkIxn99O8RsfTL8KH9BsSuExG",
      "Content-Type" : "application/json"
    } 
  };

  r = request(options, function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    res.render('index', { title: body.substring(1,body.length-1)});
  });
  */
 res.render('index', { time: '12:00PM', name:'Thomas', menuId: 'home'});
});

router.get('/trends', function(req, res, next) {
  /*const request = require('request');
  var options = {
    url: 'https://jeyvj7tvwe.execute-api.us-east-2.amazonaws.com/Gamma/getLastTime',
    headers: {
      "x-api-key" : "FVTP4xt1vA5Gb66gkIxn99O8RsfTL8KH9BsSuExG",
      "Content-Type" : "application/json"
    } 
  };

  r = request(options, function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    res.render('index', { title: body.substring(1,body.length-1)});
  });
  */
 res.render('trends', { time: '12:00PM', name:'Thomas', menuId: 'home'});
});

// POST homepage
router.post('/', function(req, res, next){
  console.log(req.body);
  res.render('index', { title: req.body["TimeStamp"]});
  res.status(200).end();
});
router.post('/trends', function(req, res, next){
  console.log(req.body);
  res.render('trends', { time: req.body["TimeStamp"], name: req.body["Name"], menuId: 'home'});
  //res.status(200).end();
});

module.exports = router;

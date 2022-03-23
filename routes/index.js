var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET home page. */
// router.get('/', function(req, res, next) {
//   fs.readFile("../alert.txt","utf-8")
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res, next) {
  fs.readFile("alert.txt", 'utf8', function(err, data) {
    // reading the file failed, report error to the user
    if (err) return next(err);

    // parse the data
    var lines = data.split(/\r?\n/);
    var title = lines.shift();
    var desc = lines.shift();

    // render template
    res.render('index', {title: "Log File Content", desc: data});
  });
});

module.exports = router;

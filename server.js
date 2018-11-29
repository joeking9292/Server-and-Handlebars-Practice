/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name: Joesph Noonan
 * Email: noonanj@oregonstate.edu
 */

var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var port = process.env.PORT || 3000;

var postData = require('./postData.json');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/posts', function (req, res, next) {
    res.status(200).sendFile(__dirname + '/public/index.html');
});

app.get('posts/:post', function (req, res, next) {
    var person = req.params.post;
    if (postData[post]) {
      res.render('postPage', peopleData[person]);
    } else {
      next();
    }
  });

app.get('*', function(req, res) {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(port, function() {
    if (err) {
        throw err;
    }
    console.log("== Server is listening on port", port);
});
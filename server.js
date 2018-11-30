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
var port = process.env.PORT || 3500;

var postData = require('./postData');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get(['/', '/index.html'], function(req, res, next) {
    res.status(200).render('postPage', {
        post: postData
    })
});

app.get('/posts/:number', function (req, res, next) {
    var number = req.params.number;
    if ((postData.length-1) < number) {
        res.status(404).render('404', {});
    } else {
        res.status(200).render('partials/postCard', postData[number]);
    }
  });

app.get('*', function(req, res) {
    res.status(404).render('404', {});
});

app.listen(port, function() {
    console.log("== Server is listening on port", port);
});
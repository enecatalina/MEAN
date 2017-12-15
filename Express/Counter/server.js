// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
var bodyParser = require('body-parser');
// using session 
var session = require('express-session');
// create the express app
var app = express();

// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({ secret: '90ae1193bf55218dc48af81a6a9222de' }));  // string for encryption

// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// root route to render the index.ejs view
app.get('/', function (req, res) {
    req.session.counter += 1;
    res.render('index', { counter: req.session.counter });
})

// post route for counting
app.post('/counter', function (req, res) {
    req.session.counter += 2;
    res.redirect('/');
})

app.post('/reset', function (req,res) {
    req.session.counter = 0;
    res.redirect('/');
})
// tell the express app to listen on port 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
});
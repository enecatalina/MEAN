var express = require("express");
var session = require("express-session");
var bodyParser = require('body-parser');
var path = require("path");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({ secret: '90ae1193bf55218dc48af81a6a9222de' }));  // string for encryption

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render("index");
})

app.post('/create', function (req, res) {
    console.log("POST DATA", req.body);
    req.session.student = req.body;
    res.redirect('/result');
})

app.get('/result', function (req, res) {
    res.render("result", { 'session': req.session.student });
})

// tell the express app to listen on port 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
});


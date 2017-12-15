var mongoose = require('mongoose');

var users = require('../controllers/logreg.js')

//Routes 
module.exports = function(app) {
    
    app.get('/', function (req, res) {
        users.index( req , res );
    })

    app.post('/create', function (req, res) {
        users.create( req , res );
    })

    app.get('/success', function (req, res) {
        users.success(req, res);
    })

    app.post('/login', function (req, res) {
        users.login(req, res);
    })

    app.get('/user/logout', function (req, res) {
        users.logout(req, res);
    })
}
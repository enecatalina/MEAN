var mongoose = require('mongoose');


//need to have the controllers file
var dogs = require('../controllers/dog.js')

//Routes
module.exports = function(app) {
    app.get('/', function (req,res) {
        dogs.index( req, res);
    })

    app.get('/dogs/new', function (req, res) {
        res.render('new')
    })

    app.post('/create', function (req, res) {
        dogs.create( req, res);
    })

    app.get('/dogs/:id', function (req, res) {
        dogs.profile( req, res);
    })

    app.get('/dogs/edit/:id', function (req, res) {
        dogs.edit( req, res );
    })

    app.post('/update' , function (req, res) {
        dogs.update( req, res);
    })

    app.post('/dogs/:id/delete' , function (req, res) {
        dogs.delete(req, res);
    })
}
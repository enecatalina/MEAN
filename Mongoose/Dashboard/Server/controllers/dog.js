var mongoose = require('mongoose');
var Dogs = mongoose.model("Dogs")

module.exports = {
    index: function (req, res) {
        Dogs.find({}, function (errors, dogs) {
            if (errors) {
                console.log("There was a problem find all  the dogs")
                console.log(errors)
            } else {
                console.log(dogs)
            }
            res.render('index', { 'dogs': dogs })
        });
    },

    create : function (req, res) {
        console.log('POST DATA', req.body);
        var dog = new Dogs
            ({
                Name: req.body.name,
                Breed: req.body.breed,
                Age: req.body.age,
                Favorite_Treat: req.body.treat,
            })
        dog.save(function (error) {
            if (error) {
                console.log("Not all fields are filled out correctly!")
                res.redirect('/dogs/new')
            }
            else {
                console.log('successfully added a dog!');
                res.redirect('/');
            }
        })
    },
        
    profile : function (req, res) {
        console.log('You want to see doggie:', req.params.id)
        Dogs.findOne({ _id: req.params.id }, function (error, dogs) {
             if (error) {
                console.log("There was a problem finding the doggie")
                    console.log(error)
                res.redirect('/')
             } else {
                 console.log(dogs)
                 res.render('profile', { 'dogs': dogs })
            }
         });
    },

    edit: function (req, res) {
        console.log('You want to edit doggie with the id of:', req.params.id)
        Dogs.findOne({ _id: req.params.id }, function (errors, dogs) {
            if (errors) {
                console.log("There was an problem finding the doggie")
                console.log(errors)
                res.redirect('/')
            } else {
                console.log(dogs)
                res.render('edit', { 'dogs': dogs })
            }
        });
    },

    update: function (req, res) {
        console.log("DOGGIE UPDATE")
        Dogs.update({ _id: req.body.id },
            {
                Name: req.body.name,
                Breed: req.body.breed,
                Age: req.body.age,
                Favorite_Treat: req.body.treat
            },
            function (errors) {
                if (errors) {
                    console.log("ERRORS")
                    console.log(errors)
                    res.redirect('/dogs/edit/' + req.body.id)
                } else {
                    console.log('Doggie profile was updated!!')
                    res.redirect('/')
                }
            })
    },
    delete : function (req, res) {
        Dogs.remove({ _id: req.params.id },
            function (errors) {
                if (errors) {
                        console.log(errors);
                }
                res.redirect('/');
            });
        },
}


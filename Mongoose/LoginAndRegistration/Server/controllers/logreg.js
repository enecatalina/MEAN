var mongoose = require('mongoose');
var User = mongoose.model("User")
var bcrypt = require('bcrypt-as-promised');
var currentUser = require('express-session');

module.exports = {

  index : function (req,res) {
        res.render('index')
    },


    create : function (req, res) {
        {
            var user = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                birthday: req.body.birthday,
                email: req.body.email,
                password: req.body.password,
            });

    
            user.save(function (errors, user) {
                if (errors) {
                    console.log(errors);
                    res.render('index', { errors: errors })
                }
                else {
                    console.log("===USER HAS REGISTERED===");
                    req.session.currentUser = user._id;
                    res.redirect('/success');
                }
            });
    }
},

    login: function (req, res) {
        User.findOne({ email: req.body.email }, function (errors, user) {
            if (user) {
                console.log(user);
                bcrypt.compare(req.body.password, user.password)
                    .then(function ( matchedPassword) { 
                        req.session.currentUser = user._id
                        console.log(matchedPassword)
                        console.log("===USER LOGGED IN===");
                        res.redirect('/success');

                    })
                    .catch(function (errors, notMatched) {
                        console.log("===USER PASSWORD DOESNT MATCH===")
                        console.log(errors);
                        res.render('index')
                    })
            }
            else {
                console.log(errors);
                console.log("====User does not exist in database====");
                res.render('index')
            }
        })

    },
        
    success: function (req , res) {
        User.findOne({ _id: req.session.currentUser }, function (errors, user) { 
            console.log(user)
            if (errors) {
                console.log(errors);
            }
            else {
                console.log(user);
                res.render('success', { user: user });
            }
        });
    },

    logout : function (req, res) {
        req.session.user = "";
        console.log("Succesfully log out")
        res.redirect('/');
    }

}

  

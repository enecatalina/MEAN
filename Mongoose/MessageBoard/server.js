var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");
var path = require("path")
// Requiring mongoose
var mongoose = require('mongoose');
// make the database  //match the db
mongoose.connect('mongodb://localhost/message_board');
// Add me
var Schema = mongoose.Schema;

//this must match the collection
var MessageSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    message: { type: String, required: true, minlength: 1 },
    _comment: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
})
mongoose.model('Message', MessageSchema);
var Message = mongoose.model('Message');

var CommentSchema = new mongoose.Schema ({
    name: { type: String, required: true, minlength: 1 },
    comment: { type: String, required: true, minlength: 1 },
    //ref is the related table
    _message: { type: Schema.Types.ObjectId, ref: 'Message' },
})
mongoose.model('Comment', CommentSchema);
var Comment = mongoose.model('Comment');
// -------------------------------------------------------- // 
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({ secret: '90ae1193bf55218dc48af81a6a9222de' }));  // string for encryption

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// -------------------------------------------------------- // 
app.get('/', function (req, res) {
    Message.find({}).populate('_comment').exec(function (error, allBoard) {
        if (error) {
            console.log('ERROR FINDING MESSAGE BOARD')
        }
        res.render('index', { 'Message': allBoard });
    })
});
// -------------------------------------------------------- // 
app.post('/createMessage', function (req, res) {
    console.log("-----POST DATA-----", req.body);
    // This is where we would add the user from req.body to the database.
    var message = new Message
    ({
        name : req.body.name,
        message : req.body.message,
    })

    message.save(function(error){   
        if(error){
            console.log("------creating message error------")
            res.render("index", {errors : message.errors})
        }
        else { 
            console.log('-----MESSAGE WAS POSTED-----');
            res.redirect('/');
        }
    })
})
// -------------------------------------------------------- // 
// route for creating one comment with the parent post id
app.post('/createComment', function (req, res) {
    Message.findOne({ _id: req.body._idMessage }, function (err, message) {
        // console.log(message)
        console.log('=====saving comment====')
        console.log(req.body.name)
        console.log(req.body.comment)
        var newComment = new Comment(req.body);
        console.log(newComment)
        newComment._message = message._id;
        newComment.save(function (err) {
                message._comment.push(newComment);
                    console.log(newComment)
                message.save(function(err){
                    console.log(message)
                    console.log(newComment)
                    res.redirect('/')
                })
            });
        });
    });



// tell the express app to listen on port 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
});

var mongoose = require('mongoose');

var DogsSchema = new mongoose.Schema({
    Name: { type: String, required: true, minlength: 3 },
    Breed: { type: String },
    Age: { type: Number },
    Favorite_Treat: { type: String, required: true },
})

mongoose.model('Dogs', DogsSchema);
var Dogs = mongoose.model('Dogs') 
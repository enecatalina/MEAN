
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;
    UserSchema = new Schema({
     
        firstName: {
            type: String,
            required: [true, "this is for something else"],
            trim: true,
            },
        lastName: {
            type: String,
            required: true,
            trim: true
        },
       
        birthday: {
            type: Date,
            required: true
        },
        password: {
            type: String,
            required: true,
            minlength: 8,
            maxlength: 32,
            validate: {
                validator: function (value) {
                    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test(value);
                },
                message: "Password failed validation, you must have at least 1 number, uppercase and special character"
            }
        },
        email: {
            type: String,
            required: true,
            unique: true,
            minlength: 6,
            validate: {
                validator: function (value) {
                    return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);

                },
                message: "Invalid email format."
            }
        },
    }, {
            timestamps: true
        });

UserSchema.pre('save', function (callback) {
    // Hash before saving
    var hashed = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10))
    this.password = hashed;
    callback();
});

mongoose.model('User', UserSchema);
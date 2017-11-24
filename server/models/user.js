const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

//Define model
var userSchema = mongoose.Schema({

    lists: [{ type: Schema.Types.ObjectId, ref: 'List' }],
    local: {
        username: { type: String, unique: true, lowercase: true },
        email: {
            type: String,
            unique: true,
            lowercase: true,
            sparse: true,
            required: [true, 'É obrigratório fornecer um e-mail.']
        },
        password: String,
    },
    facebook: {
        id: String,
        token: String,
        name: String,
        email: String
    },
    twitter: {
        id: String,
        token: String,
        displayName: String,
        username: String
    },
    google: {
        id: String,
        token: String,
        email: String,
        name: String
    }

});

//Before save model run this function encrypt password
userSchema.pre('save', function (next) {
    //get access to user model
    const user = this;
    bcrypt.genSalt(10, (err, salt) => {
        if (err) { return next(err); }

        bcrypt.hash(user.local.password, salt, null, (err, hash) => {
            if (err) { return next(err); }
            user.local.password = hash;

            next();
        });
    });
});

userSchema.methods.comparePassword = function (candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.local.password, (err, isMatch) => {
        if (err) { return callback(err); }
        console.log(isMatch);
        callback(null, isMatch);
    });
}

//Create model class
const User = mongoose.model('User', userSchema);

//Export Model
module.exports = User;
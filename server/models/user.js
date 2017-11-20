const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

//Define model
const userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    password: String
});

//Before save model run this function encrypt password
userSchema.pre('save', function (next) {
    //get access to user model
    const user = this;
    bcrypt.genSalt(10, (err, salt) => {
        if (err) { return next(err); }

        bcrypt.hash(user.password, salt, null, (err, hash) => {
            if (err) { return next(err); }
            user.password = hash;

            next();
        });
    });
});

userSchema.methods.comparePassword = function (candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if (err) { return callback(err); }

        callback(null, isMatch);
    });
}

//Create model class
const ModelClass = mongoose.model('user', userSchema);

//Export Model
module.exports = ModelClass;
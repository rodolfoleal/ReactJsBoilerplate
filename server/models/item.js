const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var itemSchema = mongoose.Schema({
    name: String,
    link1: String,
    link2: String,
    giver: { type: Schema.Types.ObjectId, ref: 'User' },
    isscret: Bollean
});

const ModelClass = mongoose.model('Item', itemSchema);

module.exports = ModelClass;
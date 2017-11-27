const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const List = require('./list');

var itemSchema = mongoose.Schema({
    name: String,
    link1: String,
    link2: String,
    giver: { type: Schema.Types.ObjectId, ref: 'User' },
    isscret: Boolean
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
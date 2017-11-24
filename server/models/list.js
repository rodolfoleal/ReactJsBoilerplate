const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var listSchema = mongoose.Schema({
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    name: String,
    description: String,
    itens: [{ type: Schema.Types.ObjectId, ref: 'Item' }]
});

const List = mongoose.model('List', listSchema);

module.exports = List;
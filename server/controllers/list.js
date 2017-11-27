const List = require('../models/list');
const Item = require('../models/item');
const User = require('../models/user');

exports.index = (req, res, next) => {
    List.findById(req.params.id)
        .then((list) => res.json(list))
        .catch(next);
}

exports.create = (req, res, next) => {
    const { name, description, user } = req.body;

    List.create({
        name,
        description,
        user

    })
        .then((list) => {
            res.status(201).json(list);
        })
        .catch(next);
}

exports.delete = (req, res, next) => {

    List.remove({ _id: req.params.id })
        .then(() => res.send(200))
        .catch(next);
}

exports.addItem = (req, res, next) => {

    const { name, link1, link2 } = req.body;

    const item = new Item({
        name,
        link1,
        link2
    });
    List.findById(req.params.id)
        .then((list) => {
            list.itens.push(item);
            return list;
        })
        .then((list) => Promise.all([list.save(), item.save()]).then(() => list))
        .then((list) => res.status(201).json(list))
        .catch(next);;
}

exports.removeItem = (req, res, next) => {
    List.update(
        { _id: req.params.id },
        { $pull: { itens: req.params.itemId } }
    )
        .then(() => {
            return Item.findByIdAndRemove(req.params.itemId)
        })
        .then(() => res.send(200))
        .catch(next);
}


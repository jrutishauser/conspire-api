'use strict';

var mongoose = require('mongoose'),
    Conspiracy = mongoose.model('Conspiracies');

exports.list_all_conspiracies = function(req, res) {
    Conspiracy.find({}, (err, conspiracy) => {
        if(err) res.send(err);
        console.log('CONSPIRACY: ', conspiracy)
        res.json(conspiracy);
    })
}

exports.create_a_conspiracy = function(req, res) {
    var new_conspiracy = new Conspiracy(req.body);
    new_conspiracy.save(function(err, conspiracy) {
        if(err) res.send(err);
        res.json(conspiracy);
    });
}

exports.read_a_conspiracy = function(req, res) {
    Conspiracy.findById(req.params.conspiracyId, (err, conspiracy) => {
        if(err) res.send(err);
        res.json(conspiracy);
    })
}

exports.update_a_conspiracy = function(req, res) {
    Conspiracy.findOneAndUpdate(req.params.conspiracyId, req.body, {new: true}, (err, conspiracy) => {
        if(err) res.send(err);
        res.json(conspiracy);
    })
}

exports.delete_a_conspiracy = function(req, res) {
    Conspiracy.remove({
        _id: req.params.conspiracyId
    }, function(err, conspiracy) {
        if (err) res.send(err);
        res.json({message: "Conspiracy Deleted."});
    });
}
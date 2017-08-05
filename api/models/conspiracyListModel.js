'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConspiracySchema = new Schema({
    title: {
        type: String,
        required: 'Please enter the title of the conspiracy'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    links: {
        type: [{
            type: String,
            required: 'Please provide at least one link'
        }]
    }
});

module.exports = mongoose.model('Conspiracies', ConspiracySchema);
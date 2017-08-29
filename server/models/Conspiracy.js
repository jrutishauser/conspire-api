const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const conspiracySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: String,
    tldr: String,
    isDeleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    _creator: { type: Schema.ObjectId, ref: 'User' },
    _comments: [{ type: Schema.ObjectId, ref: 'Comment'}]
});

const Conspiracy = mongoose.model('Conspiracy', conspiracySchema);
export default Conspiracy;
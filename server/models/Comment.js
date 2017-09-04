const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    link: String,
    tldr: String,
    isDeleted: { type: Boolean, default: false },
    likes: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    _creator: { type: Schema.ObjectId, ref: 'User' },
    _conspiracy: { type: Schema.ObjectId, ref: 'Conspiracy' }
});

const autoPopulateCreator = function(next) {
    this.populate({
        path: '_creator',
        select: 'username createdAt -_id'
    });
    next();
}

commentSchema.pre('find', autoPopulateCreator);

const Comment = mongoose.model('Comment', commentSchema);
export default Comment;
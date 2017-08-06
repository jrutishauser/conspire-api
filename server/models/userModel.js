const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: [5, 'Username must be at least 5 characters long.']
    },
    password: {
        type: String,
        required: true,
        minlength: [8, 'Password must be at least 8 characters long.']
    }
});

const User = mongoose.model('User', userSchema);
export default User;
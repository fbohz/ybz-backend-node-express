const mongoose = require('mongoose');

// user schema

const userSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: [true, 'missing uid'],
    },
    name: String,
    email: String,
    created_at: {
        type: Date,
        default: Date.now()
    },
    provider: String,
    remember_token: String,
    client_mutation_id: String,
})

const User = mongoose.model('User', hexagramSchema)

module.exports = User
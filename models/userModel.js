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

})

/*
    t.string "name"
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "provider"
    t.string "uid"
    t.string "remember_token"
    t.string "client_mutation_id"
*/
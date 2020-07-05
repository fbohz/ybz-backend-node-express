const mongoose = require('mongoose');

// hexagram schema

const hexagramSchema = new mongoose.Schema({
    number: Number,
    lower_triagram: String,
    upper_triagram: String,
    english_name: {
        type: String,
        required: [true, 'missing one or more required values'],
    },
    chinese_name: {
        type: String,
        required: [true, 'missing one or more required values'],
    },
    characters: {
        type: String,
        required: [true, 'missing one or more required values'],
    },
    judgement: String,
    image: String,
    line_1: String,
    line_2: String,
    line_3: String,
    line_4: String,
    line_5: String,
    line_6: String,
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: String
    
})

const Hexagram = mongoose.model('Hexagram', hexagramSchema)

module.exports = Hexagram
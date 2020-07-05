const mongoose = require('mongoose');

// Reading schema


const readingSchema = new mongoose.mongo.Schema({

})

const Reading = mongoose.model('Reading', readingSchema)

module.exports = Reading
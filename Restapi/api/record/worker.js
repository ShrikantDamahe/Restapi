const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Name: String,
    Age: Number,
    Contact: Number,
    gender: String
});

module.exports = mongoose.model('Worker', workerSchema);

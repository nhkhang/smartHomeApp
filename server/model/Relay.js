const mongoose = require('mongoose')

const relaySchema = new mongoose.Schema({
    id: String,
    name: String,
    data: String,
    unit: String
}, {timestamps: true})

const Relay = mongoose.model('Relay', relaySchema)
module.exports = Relay
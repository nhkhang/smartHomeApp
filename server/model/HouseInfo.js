const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const houseInfoSchema = new Schema({
    LightIntensity: {
        type: Number
    },
    Humidity: {
        type: Number
    },
    Temperature: {
        type: Number
    },
}, {timestamps: true})

const HouseInfo = mongoose.model('HouseInfo', houseInfoSchema)
module.exports = HouseInfo
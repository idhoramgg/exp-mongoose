const mongoose = require('mongoose')

const Schema = mongoose.Schema

const addressSchema = new Schema({
    address: {
        type: String,
        required: true
    }
}, {timestamps:true})

const Address = mongoose.model('address', addressSchema)

module.exports = Address;
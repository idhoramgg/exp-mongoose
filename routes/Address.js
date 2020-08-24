const express = require('express')
const route = express.Router();

const {
    getAllData,
    addOne
} = require('../controllers/Address')

route.get('/address', getAllData)
route.post('/address', addOne)

module.exports = route
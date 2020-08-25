const express = require('express')
const route = express.Router();

const {
    getAllData,
    addOne
} = require('../controllers/Users')

route.get('/users', getAllData)
route.post('/users', addOne)

module.exports = route
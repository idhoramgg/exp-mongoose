const express = require('express')
const route = express.Router();

const {
    getAllData,
    addOne
} = require('../controllers/Movies')

route.get('/movies', getAllData)
route.post('/movies', addOne)

module.exports = route
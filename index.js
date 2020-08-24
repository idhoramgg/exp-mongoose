const express = require('express');
const db = require('./config/db');
const bodyParser = require('body-parser')

const userRouter = require('./routes/users')
const addressRouter = require('./routes/Address')

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('welcome')
})

app.use('/', userRouter)
app.use('/', addressRouter)

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('we re connected'));

app.listen(8000, ()=> {
    console.log('connected')
})
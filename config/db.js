const mongoose = require('mongoose')


const url= "mongodb://localhost:27017/impactbyte";
// const database = "impactbyte";

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
const db = mongoose.connection;


module.exports = db;
const User = require('../Models/Users');

module.exports = {
    getAllData : (req, res) => {
        User.find()
        .populate('address', "-_id")
        .then(result => {
            res.send({
                message: 'get All data',
                result
            })
        })
        .catch(error => {
            console.log(error)
            res.send({
                message: 'failed'
            })
        })
    },
    addOne: (req, res) => {
        const {name, email, password, phoneNumber } = req.body
        User.create({
            name,
            email,
            password,
            phoneNumber
        }, (error, result) => {
            if(error){
                res.send({
                    message: "error"
                })
            }
            else {
                res.send({
                    message: result
                })
            }
        })
    }
}
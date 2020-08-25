const Users = require('../Models/Users');

module.exports = {
    getAllData : (req, res) => {
        Users.find()
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
        const {fullname, username, email, password, address } = req.body
        Users.create({
            fullname,
            username,
            email,
            password,
            address
        }, (error, result) => {
            if(error){
                res.send({
                    message: "error"
                })
            }
            else {
                res.send({
                    message: "success add user", 
                    result
                })
            }
        })
    }
}
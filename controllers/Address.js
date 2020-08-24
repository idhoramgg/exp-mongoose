const Address = require('../Models/Address');
const User = require('../Models/Users');

module.exports = {
    getAllData : (req, res) => {
        Address.find({}, (error, users) => {
            if(error) {
                res.send({
                    message: "Error"
                })
            } else {
                res.send({
                    message: 'Get All data',
                    users
                })
            }
        })
    },
    addOne: async (req, res) => {
        const address = await Address.create({
            address: req.body.address
        })
        const user = await User.findOneAndUpdate(
            {_id: req.body._id },
            {$push: {address: address._id}},
            {new: true}
            );
        if(user) {
            res.send({
                message: 'success',
                address,
                user
            })
        } else {
            res.send({
                message: 'error'
            })
        }
    }
}

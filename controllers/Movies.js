const Movies = require('../Models/Movies');

module.exports = {
    getAllData : async (req, res) => {
        const movies = await Movies.find()
        if(movies){
            res.status(200).json({
                message: 'get all data',
                movies
            })
        } else {
            res.status(400).json({
                message: 'failed'
            })
        }
        
    },
    addOne: async (req, res) => {
        try {
            const {title, year, genre, description,url_trailer} = req.body
        const newMovies = await Movies.create({
            title,
            year,
            genre,
            description,
            url_trailer
        })
        if(newMovies) {
            res.send({
                message: 'success',
                newMovies,
            })
        } else {
            res.send({
                message: 'error',
            })
        }
    } catch (error) {
        console.log(error)
    }
        
    }
}

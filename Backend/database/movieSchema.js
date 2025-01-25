const mongoose = require('mongoose')
const movieSchema=mongoose.Schema({
    movie:{
        type:String
    },
    poster:{
        type:String
    },
    run_time:{
        type:String
    }
})

const movieModal=mongoose.model('movies',movieSchema)

module.exports={
    movieModal
}

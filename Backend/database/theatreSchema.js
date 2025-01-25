const mongoose = require('mongoose')

const theatreSchema=mongoose.Schema({
    theatre_name:{
        type:String
    },
    screen:{
        type:Number
    },
    movie_id:{
        type:String
    },
    timings:{
        type:Array
    },
    total_seats:{
        type:Number
    }
})

const theatreModel=mongoose.model('theatres',theatreSchema)

module.exports = {
    theatreModel
}






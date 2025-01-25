const express=require('express')
const { movieModal } = require('../database/movieSchema')
const { theatreModel } = require('../database/theatreSchema')

const movieRouter=express.Router()



//to view which movies are available
movieRouter.get('/movies',async(req,res)=>{
    const movies=await movieModal.find({})
    if(movies){
        console.log(movies)
        res.send({moviesList:movies})
    }
    else{
        res.send({msg:'No Movies available'})
    }
})

//to view which theatres are available for selected movie
movieRouter.get('/movie/theaters',async(req,res)=>{
    const movie_id = req.query.movie_id
    const theatreAvailability=await theatreModel.find({movie_id:movie_id})
    if(theatreAvailability){
        res.send({availableTheatres:theatreAvailability})
    }else{
        res.send({msg:"This movie not available"})
    }
})

module.exports={
    movieRouter
}
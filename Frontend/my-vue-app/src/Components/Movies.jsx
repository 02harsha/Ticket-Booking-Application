import { useEffect, useState } from "react"

import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { getTheatres } from "../redux/theaterSlice"
import { selectedMovie } from "../redux/userSelection"

function Movies(){
    const dispatch=useDispatch()
    const navigate = useNavigate()
    const [movies,setmovies]=useState([])
    const fetchMovies=()=>{
        const res=axios.get('http://localhost:5422/movies')
        res.then((data)=>{
            
            setmovies(data.data.moviesList)
        })
    }
    useEffect(()=>{
        fetchMovies()
    },[])

    const viewTheatre=async(movieName,movieID)=>{
        const availableTheatres=await axios.get(`http://localhost:5422/movie/theaters?movie_id=${movieID}`)
        dispatch(getTheatres(availableTheatres.data))
        dispatch(selectedMovie(movieName))
        navigate('/movie/theatre')
    }
    return(
    <>
    <div className="text-4xl mx-6 mt-6 mb-6">Available Movies in <span className="text-orange-500">Kurnool</span></div>
    <div className="flex flex-wrap justify-center place-items-center mt-4 gap-6">
            {
                movies.map((movie)=>(
                  
                    <div className=" grid place-items-center gap-1 w-72 h-auto">
                        <img src={movie.poster} className="h-80" alt="" />
                        <div className="text-xl">{movie.movie}</div>
                        <div className="text-sm">{movie.run_time}</div>
                        <button className="btn btn-wide btn-info" onClick={()=>{viewTheatre(movie.movie,movie._id)}}>Book Now</button>
                    </div>
                ))
            }
            
        </div>
    </>
        
    )
}
export default Movies
import { useDispatch, useSelector } from "react-redux"
import Navbar from "../Components/Navbar"
import { useNavigate } from "react-router-dom"
import { selectedShowTime, selectedTheatre } from "../redux/userSelection"

function Theatres(){
    const availableTheatres=useSelector((state)=>state.theatres.theatres.availableTheatres)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const selectShowTime=(time)=>{
        dispatch(selectedShowTime(time))
        navigate('/book')
    }
    const selectTheatre=(theatreName)=>{
        dispatch(selectedTheatre(theatreName))
    }
    
    return(
        <>
        <Navbar/>
        <div className="grid">
            <div className="text-2xl m-6">Location:<span className="text-orange-600">Kurnool</span></div>
            <div className="text-black flex m-7">
                {
                    availableTheatres.map((theatre)=>(
                        
                        <div className="bg-slate-200 rounded-md p-6">
                            <p className="text-xl">{theatre.theatre_name}</p>
                            <p className="text-md">Screen: {theatre.screen}</p>
                            <br />
                            <div className="flex gap-4">
                                <p className="text-md">Timings:</p>
                                {
                                    theatre.timings.map((time)=>(
                                        
                                        <div className="text-lg border hover:rounded  hover:bg-orange-400 hover:transition-all cursor-pointer p-2 " onClick={()=>{
                                            selectShowTime(time)
                                            selectTheatre(theatre.theatre_name)
                                        }}>{time}</div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
        </>
        

    )
    
}
export default Theatres
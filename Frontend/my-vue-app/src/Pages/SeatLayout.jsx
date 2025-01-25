

import { useSelector,useDispatch } from "react-redux";
import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";
import { removeSeat, selectedSeats } from "../redux/userSelection";
import Paymentmodal from "../Components/Paymentmodal";
import { activePaymentModal } from "../redux/isUserSlice";

function SeatLayout() {
    const selected=useSelector((state) => state.userChoice.Seats)
    const isPaymentModalActive=useSelector((state)=>state.currentUser.isPaymentInitiated)
    const dispatch=useDispatch()
    const [seats, setSeats] = useState([]);
    const userSelection = useSelector((state) => state.userChoice);
    const theatres = useSelector((state) => state.theatres.theatres.availableTheatres);
    const totalAmt=useSelector((state)=>state.userChoice.total)

    useEffect(() => {
        if (theatres && userSelection) {
            const selectedTheatre = theatres.find(
                (theatre) => theatre.theatre_name === userSelection.theatre
            );
            if (selectedTheatre) {
                setSeats(new Array(selectedTheatre.total_seats).fill(null));
            } else {
                console.log('Theatre not found');
            }
        }
    }, [theatres, userSelection]);

    const selectedSeat=(index)=>{
        if(selected.includes(index)){
            dispatch(removeSeat(index))
            document.getElementById(index).style.backgroundColor=''
        }else{
            dispatch(selectedSeats(index))
            document.getElementById(index).style.backgroundColor='orange'
        }
        

    }
    const makePayment=()=>{
        dispatch(activePaymentModal())
    }
    return (
        <div>
            <Navbar />
            <div className="flex justify-evenly">
                <p className="text-lg">{userSelection.movie}</p>
                <p className="text-lg">{userSelection.theatre}</p>
                <p className="text-lg">Time: {userSelection.showTime}</p>
            </div>
            <div className="grid justify-center place-items-center mt-9">
                <div className="text-md text-orange-500 mb-11">Screen This Way</div>
                <div className="flex flex-wrap gap-4 max-w-xl justify-center place-items-center">
                    {seats.map((_, index) => (
                        <div key={index} id={index} onClick={()=>{selectedSeat(index)}} className="w-10 h-10 p-2 border grid place-items-center hover:cursor-pointer" >
                            {index + 1}
                        </div>
                    ))}
                </div>

            </div>

            <div className="grid place-items-center justify-center">{selected.length>0?<button className="btn btn-info btn-wide mt-9" onClick={makePayment}>Proceed INR {totalAmt}</button>:null}</div>
            {isPaymentModalActive?<Paymentmodal/>:null}
        </div>
    );
}

export default SeatLayout;




import { useDispatch, useSelector } from "react-redux";
import { confirmBooking } from "../redux/userSelection";
import { inactivePaymentModal } from "../redux/isUserSlice";
import {loadStripe} from '@stripe/stripe-js'
import axios from "axios";
function Paymentmodal() {
    const dispatch = useDispatch();
    const confirm = useSelector((state) => state.userChoice);
    const makePayment = async () => {
        try {
            const stripe = await loadStripe('pk_test_51Qjf6kLPKbFawAsukOYXGnKQWZxYLmMm93QxrG6ULPAeQLINSrwHJ7Y08uaixoJMFuCTuoKDFkjroCmKqpvWSTPT00QVYNhpLG');
            const body = { bookingDetails: confirm };
            const res = await axios.post("http://localhost:5422/payment", body);
            const response = res.data;
    
            const result = await stripe.redirectToCheckout({
                sessionId: response.id,
            });
    
            if (result.error) {
                console.error(result.error.message);
            }
        } catch (error) {
            console.error("Error occurred during payment:", error);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative max-w-md w-full bg-white shadow-xl rounded-lg p-6">
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    onClick={() => dispatch(inactivePaymentModal())}
                >
                    &times;
                </button>
                <div className="text-xl font-semibold mb-4">{confirm.movie}</div>
                <div className="text-sm mb-2">Theatre: {confirm.theatre}</div>
                <div className="text-sm mb-2">Showtime: {confirm.showTime}</div>
                <div className="flex gap-4 flex-wrap justify-center mb-4">
                    {confirm.Seats.map((seatNumber) => (
                        <div key={seatNumber} className="w-12 h-12 flex items-center justify-center border">
                            {seatNumber}
                        </div>
                    ))}
                </div>
                <div className="text-xl font-semibold mb-4">Total Amount: ₹{confirm.total}</div>
                <div className="grid place-items-center">
                    <button className="btn btn-info btn-wide" onClick={makePayment}>Make Payment</button>
                </div>
            </div>
        </div>
    );
}

export default Paymentmodal;

import { Link } from "react-router-dom"

function PaymentSuccessPage(){
    return(
        <div className="grid place-items-center justify-center h-screen">
            <div className="w-96 h-72 rounded-lg bg-green-500 grid justify-center place-items-center">
                <div className="text-white text-3xl text-wrap">Payment Successful</div>
                <Link className="text-white" to='/'>Return Dashboard</Link>
            </div>
        </div>
    )
}
export default PaymentSuccessPage
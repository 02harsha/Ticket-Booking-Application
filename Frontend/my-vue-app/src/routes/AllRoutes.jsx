import {Route,Routes} from 'react-router-dom'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import Dashboard from '../Pages/Dashboard'
import Theatres from '../Pages/Theatres'
import SeatLayout from '../Pages/SeatLayout'
import PaymentSuccessPage from '../Pages/PaymentSuccessPage'
import PaymentFailurePage from '../Pages/PaymentFailurePage'
function AllRoutes(){
    return(
        <Routes >
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/movie/theatre' element={<Theatres/>}/>
            <Route path='/book' element={<SeatLayout/>}/>
            <Route path='/paymentSuccess' element={<PaymentSuccessPage/>}/>
            <Route path='/failure' element={<PaymentFailurePage/>}/>
        </Routes>
    )
}
export default AllRoutes
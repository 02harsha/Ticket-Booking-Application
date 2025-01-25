import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Link,useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'



function Login() {
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm();
    
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const submit = async (data) => {
        const res=await axios.post('http://localhost:5422/u/login',data)
        if(res.data.token!=undefined){
            localStorage.setItem('token',res.data.token)
            navigate('/')
        }else{
            alert('Invalid Credentials')
            navigate('/login')
            
        }
        
        
    };

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center h-screen bg-slate-800">
            <div className="text-5xl text-white break-words mr-0 lg:mr-6 mb-6  lg:mb-0 text-center lg:text-left">
                Welcome to <span className='text-orange-600'>eTickets</span>
                <div className='text-white text-wrap text-base mt-2'>We are Happy You arrived!! </div>
            </div>
            
            <form onSubmit={handleSubmit(submit)} className="grid gap-2 bg-white p-12 rounded-md">
                <div className="text-center text-3xl">LOGIN</div>
                
                <label htmlFor="un">Username</label>
                <input
                    type="text"
                    placeholder="Enter Username"
                    id="un"
                    className="input input-bordered w-full max-w-xs"
                    {...register('username', { required: 'Username Is Required' })}
                />
                <p className="text-red-600">{errors.username?.message}</p>
                
                <label htmlFor="pw">Password</label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    id="pw"
                    className="input input-bordered w-full max-w-xs"
                    {...register('password', { required: 'Password Is Required' })}
                />
                <p className="text-red-600">{errors.password?.message}</p>
                
                <button type="submit" className="btn btn-info btn-wide">Login</button>
                <div>Do not have an account? <Link className='text-blue-600' to='/register'>Register Here</Link></div>
                
            </form>
            
        </div>
    );
}

export default Login;

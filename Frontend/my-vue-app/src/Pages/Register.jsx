
import{useForm} from 'react-hook-form'

function Register(){
    const{handleSubmit,register,formState:{errors}} = useForm()
    const submit=(data)=>{
        console.log(data)
    }

    return(
        <>
        <div className="h-screen bg-slate-800 grid justify-center place-items-center">
            <div className='text-3xl text-white'>Join with us! <span className='text-orange-500'>eTickets</span></div>
            <form onSubmit={handleSubmit(submit)} className='bg-white pt-3 pb-3 pr-11 pl-11 grid gap-2 rounded-md'>
                <div className='text-3xl'>Register</div>
                <label htmlFor="un">Username</label>
                <input type="text" placeholder="Enter Username" className="input input-bordered w-full max-w-xs" id='un' {...register('username',{required:'Username is required'})} />
                <p className='text-red-600'>{errors.username?.message}</p>

                <label htmlFor="pw">Password</label>
                <input type="password" className="input input-bordered w-full max-w-xs" placeholder='Enter Password' {...register('password',{required:'Password is required'})}/>
                <p className='text-red-600'>{errors.password?.message}</p>

                <label htmlFor="pn">Phone Number</label>
                <input type="text" className="input input-bordered w-full max-w-xs" id='pn' placeholder='Enter Phone Number' {...register('phone_number',{required:"Mobile Number is required"})} />
                <p className='text-red-600'>{errors.phone_number?.message}</p>

                <label htmlFor="mail">Email</label>
                <input type="email" placeholder='Enter Email' className="input input-bordered w-full max-w-xs" id='mail' {...register('email',{required:'Email is required'})} />
                <p className='text-red-600'>{errors.email?.message}</p>

                <button className="btn btn-info btn-wide" type='Submit'>Register</button>
            </form>
            
        </div>
        </>
    )
}
export default Register
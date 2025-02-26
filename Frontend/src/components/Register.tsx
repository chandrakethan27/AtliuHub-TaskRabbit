import React from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const Register:React.FC= () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();
    const onSubmit = () => {
        navigate('/login')
    }
    return (
    <div className='text-center'>
                <h1 className='text-7xl text-orange-600 mt-10' >Register</h1>
        <form action="" onSubmit={handleSubmit(onSubmit)} className='mt-20' >
        <span className="block text-sm font-medium text-slate-700">Email:</span>
            <input {...register("email", {required: true, pattern: /^[a-zA-Z0-9]+([._-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+([.-][0-9a-zA-Z]+)*\.[a-zA-Z]{2,}$/})} type="text" className='mt-1 w-[250px] px-3 py-2 bg-white border
             border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
    ' />
            {errors.email?.type === 'required' && <p role="alert" className='text-red-600'>Email is required</p>}
            <br />

            <span className="block text-sm font-medium text-slate-700">Username:</span>
            <input {...register("username", {required: true})} type="text" className='mt-1 w-[250px] px-3 py-2 bg-white border
             border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
    '/>
            {errors.username?.type === 'required' && <p role="alert" className='text-red-600'>Username is required</p>}
            <br />
            <span className="block text-sm font-medium text-slate-700">Password:</span>
            <input type="password" {...register("password", {required: true})}  className='mt-1 w-[250px] px-3 py-2 bg-white border
             border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
    '/>
            {errors.password?.type === 'required' && <p role="alert" className='text-red-600'>Password is required</p>}
            <br />
            <button type='submit' className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 px-7 py-1 rounded-2xl text-white mt-4"> Register</button>
        </form>
    </div>
  )
}

export default Register
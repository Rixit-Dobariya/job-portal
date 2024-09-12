import React from 'react'
import { FcGoogle } from "react-icons/fc";


const LoginPage = () => {
  return (
    <div className="flex flex-col mx-auto h-screen justify-center items-center gap-3 w-2/6">
        <div className="flex">
            <h3 className="primary-light-bg primary px-3 py-2 font-medium">Job Seeker</h3>
            <h3 className="primary px-3 py-2 font-medium">Company</h3>
        </div>
        <h2 className="heading clashDisplay text-3xl font-semibold">Welcome Back, Dude</h2>
        <div className="flex gap-2 primary border-2 primary-b justify-center items-center w-full p-3">
            <FcGoogle className="size-6"/>
            <h3 className="font-semibold">Login with Google</h3>
        </div>
        <div className="flex items-center w-full py-5 justify-center">
          <div className='border-t subtitle border w-full'></div>
          <div className="absolute bg-white px-3 mx-auto subtitle">Or login with email</div>
        </div>
        <div className="flex flex-col w-full gap-2">
            <label htmlFor="email" className='heading font-semibold'>Email Address</label>
            <input type="text" id='email' placeholder='Enter email address' className='border border-b p-2'/>
        </div>
        <div className="flex flex-col w-full gap-2">
            <label htmlFor="password" className='heading font-semibold'>Password</label>
            <input type="text" id='password' placeholder='Enter password' className='border border-b p-2'/>
        </div>
    </div>
  )
}

export default LoginPage
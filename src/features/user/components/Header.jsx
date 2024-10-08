import React from 'react'
import {Link, NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div className="banner-bg">  
        <div className='container mx-auto  px-10 flex p-3 gap-5 banner-bg items-center justify-between'>
            <div className='flex gap-10'>
                <Link to='/' className='flex gap-2 justify-center'>
                    <img src="logo.png" alt="" />
                    <h1 className='text-2xl font-bold heading'>JobHuntly</h1>
                </Link>
                <div className='navLink flex gap-5 font-medium text-base items-center'>
                    <NavLink to='jobs/' className={({isActive})=>isActive?'primary font-semibold':''}>
                        Find Jobs
                    </NavLink>
                    <NavLink to='companies/'  className={({isActive})=>isActive?'primary font-semibold':''}>    
                        Browse Companies
                    </NavLink>
                </div>
            </div>
            <div className='navLink flex gap-5 font-medium  px-3 py-2 items-center'>
                <Link to='/login' className='primary p-2'>
                    Login
                </Link>
                <Link to='/register' className='primary-bg text-white px-5 py-2'>    
                    Sign Up
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Header
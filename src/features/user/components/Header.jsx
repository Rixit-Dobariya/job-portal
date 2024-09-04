import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className="banner-bg">  
        <div className='container mx-auto flex p-3 px-10 gap-5 banner-bg items-center justify-between'>
            <div className='flex gap-10'>
                <Link to='/' className='flex gap-2 justify-center'>
                    <img src="logo.png" alt="" />
                    <h1 className='text-2xl font-bold heading'>JobHuntly</h1>
                </Link>
                <div className='navLink flex gap-5 font-medium text-base items-center'>
                    <Link to='jobs/'>
                        Find Jobs
                    </Link>
                    <Link>    
                        Browse Companies
                    </Link>
                </div>
            </div>
            
            <div className='navLink flex gap-5 font-medium  px-3 py-2 items-center'>
                <Link className='primary p-2'>
                    Login
                </Link>
                <Link className='primary-bg text-white px-5 py-2'>    
                    Sign Up
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Header
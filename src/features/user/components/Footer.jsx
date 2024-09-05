import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer-bg flex flex-col gap-2 py-3">  
        <div className='container mx-auto  px-10 flex-col gap-3 flex'>
            <div className="grid-cols-4 grid p-3 gap-5 text-border items-start">
                <div className='flex flex-col gap-2'>
                    <Link to='/'>
                        <img src="logo.png" alt="" />
                        <h1 className='text-2xl font-bold text-white'>JobHuntly</h1>
                    </Link>
                    <div className='subtitle '>Great platform for the job seeker that passionate about startups. Find your dream job easier.</div>
                </div>
                <div>
                    <ul className="subtitle flex flex-col gap-2">
                        <li className='text-white font-semibold text-lg'>About</li>
                        <li>Companies</li>
                        <li>Pricing</li>
                        <li>Terms</li>
                        <li>Advice</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div>
                    <ul className="subtitle flex flex-col gap-2">
                        <li className='text-white font-semibold text-lg'>About</li>
                        <li>Companies</li>
                        <li>Pricing</li>
                        <li>Terms</li>
                        <li>Advice</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div>
                    <ul className="subtitle flex flex-col gap-2">
                        <li className='text-white font-semibold text-lg'>About</li>
                        <li>Companies</li>
                        <li>Pricing</li>
                        <li>Terms</li>
                        <li>Advice</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-300 h-1 w-full "></div>
            <div className='flex justify-center text-border'>
                <div>2021 @ JobHuntly. All rights reserved.</div>
            </div>
        </div>
    </div>
  )
}

export default Footer
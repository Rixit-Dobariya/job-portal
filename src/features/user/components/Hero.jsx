import React from 'react'
import Heading from './Heading'
import { FaSearch,FaMapMarkerAlt } from "react-icons/fa";

const Hero = () => {
    return (
    <div className="banner-bg">
        <div className=" py-10  container mx-auto px-10">
            <div className='flex-col flex'>
                <div className="w-2/5">
                    <Heading text="Discover more than" blueText="5000+ jobs" />
                    <div className='grey font-normal text-xl mt-6'>Great platform for the job seeker that searching for new career heights and passionate about startups.</div>
                </div>
                <div className='bg-white p-3 flex gap-3 items-center w-fit px-5  mt-8' >
                    <div className='flex items-center gap-2'>
                        <FaSearch className='w-5 h-5 heading' />
                        <input type="text" placeholder='Job title or keyword' className='p-2 border-b-2' />
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaMapMarkerAlt className='w-5 h-5 heading' />
                        <input type="text" placeholder='Location' className='p-2 border-b-2' />
                    </div>
                    <button className='primary-bg text-white px-7 py-3'>
                        Search my job
                    </button>
                </div>
                <div className='grey mt-2'>Popular : UI Designer, UX Researcher, Android, Admin</div>
            </div>
        </div>
    </div>
  )
}

export default Hero
import React from 'react'
import Heading from './Heading'

const Hero = () => {
    return (
    <div className="banner-bg">
        <div className="grid grid-cols-2 pt-8 container mx-auto px-10">
            <div className='flex-col flex gap-5'>
                <Heading text="Discover more than" blueText="5000+ jobs" />
                <div className='grey font-normal text-xl'>Great platform for the job seeker that searching for new career heights and passionate about startups.</div>
                <input type="text" placeholder='Job title or keyword' className='px-3 py-5 focus:border-none' />
            </div>
        </div>
    </div>
  )
}

export default Hero
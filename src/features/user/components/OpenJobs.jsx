import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import OpenJob from './OpenJob'

const OpenJobs = ({title='Open jobs',page='other',impText=''}) => {
  return (
    <div className='banner-bg'>
        <div className='container mx-auto px-10 flex items-center justify-between pt-9 pb-1'>
            {
                page==='other' ? <h3 className="text-3xl heading font-semibold clashDisplay">{title}</h3>  : 
                <div className='text-4xl heading font-semibold clashDisplay'>
                    {title}
                    &nbsp;<span className='lightBlue clashDisplay'>{impText}</span>
                </div>
            }
            
            <div className='flex gap-3 items-center mt-2'>
                <h5 className='primary font-semibold'>View Jobs </h5>
                <FaArrowRight className='primary font-semibold'/>
            </div>
        </div>
        <div className="container mx-auto px-10 grid grid-cols-2 gap-10 py-7 pb-9">
            <OpenJob />
            <OpenJob />
            <OpenJob />
            <OpenJob />
            <OpenJob />
            <OpenJob />
            <OpenJob />
            <OpenJob />
        </div>
    </div>
  )
}

export default OpenJobs
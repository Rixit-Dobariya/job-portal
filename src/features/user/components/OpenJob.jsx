import React from 'react'
import Label from './Label'

const OpenJob = ({position='Social Media Assistant',location='Rajkot, Gujarat',type='Full-time',requirement1='Marketing',requirement2='Design'}) => {
  return (
    <div className='px-5 py-3 flex gap-5 bg-white'>
        <img src="https://picsum.photos/80" alt="" />
        <div className='flex flex-col justify-around gap-2'>
            <div className='heading font-semibold text-xl'>{position}</div>
            <div className='subtitle'>{location}</div>
            <div className='flex gap-2'>
                <Label text={type}/>
                  <div className="border-l border-gray-300 h-full "></div>
                <Label classNames='text-yellow-500' borderClass='border-yellow-500' text={requirement1}/>
                <Label classNames='primary' borderClass='primary-b' text={requirement2}/>
            </div>
        </div>
    </div>
  )
}

export default OpenJob
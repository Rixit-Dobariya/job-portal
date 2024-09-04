import React from 'react'
import Label from './Label';

import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 6,
  borderRadius: 0,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#D6DDEB',
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#56CDAD',
    ...theme.applyStyles('dark', {
      backgroundColor: '#308fe8',
    }),
  },
}));


const Job = ({img='/logo.png',position='Social Media Assistant',location='Rajkot, Gujarat',type='Full-time',requirement1='Marketing',requirement2='Design',capacity=10,value=8}) => {
  return (
    <div className='border px-3 py-4 flex gap-5'>
        <div>
            <img src={img} alt="" className='size-12' />
        </div>
        <div className='flex flex-col gap-1'>
            <div className='heading font-semibold text-xl'>{position}</div>
            <div className='subtitle'>{location}</div>
            <div className='flex gap-2'>
                <Label text={type}/>
                <div className="border-l border-gray-300 h-full "></div>
                <Label classNames='text-yellow-500' borderClass='border-yellow-500' text={requirement1}/>
                <Label classNames='primary' borderClass='primary-b' text={requirement2}/>
            </div>
        </div>
        <div className='ml-auto flex flex-col gap-2'>
            <button className='text-white primary-bg py-2 px-12'>Apply</button>
            <BorderLinearProgress variant="determinate" value={value/capacity*100}  />
            <div className='text-sm subtitle'><span className='font-semibold heading'>{value} applied</span> of {capacity} capacity</div>
        </div>
    </div>
  )
}

export default Job
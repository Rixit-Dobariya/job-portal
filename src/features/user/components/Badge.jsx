import React from 'react'

const Badge = ({children}) => {
  return (
    <div className='bg-white rounded-full size-10 flex justify-center items-center'>
        {children}
    </div>
  )
}

export default Badge
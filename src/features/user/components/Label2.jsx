import React from 'react'

const Label2 = ({text='content'}) => {
  return (
    <div className='w-fit px-3 py-1 font-medium text-sm primary badge-bg'>
        {text} 
    </div>
  )
}

export default Label2
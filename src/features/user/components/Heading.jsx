import React from 'react'

const Heading = ({text="Heading", blueText="Blue text"}) => {
  return (
    <div className='text-6xl font-semibold heading clashDisplay'>
        {text}
        &nbsp;<span className='lightBlue clashDisplay'>{blueText}</span>
    </div>
  )
}

export default Heading
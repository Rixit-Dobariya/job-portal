import React from 'react'

const Heading = ({title="Heading", impText="Blue text",subtitle="title",page="other"}) => {
  return (
    <div className={page === 'other' && 'flex-col flex items-center'}>
      <div className={page==='other'?'text-5xl font-semibold heading clashDisplay':'text-6xl font-semibold heading clashDisplay'}>
          {title}
          &nbsp;<span className='lightBlue clashDisplay'>{impText}</span>
      </div>
      <div className='grey font-normal text-xl mt-6'>{subtitle}</div>
    </div>
  )
}

export default Heading
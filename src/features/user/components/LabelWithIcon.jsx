import React from 'react'

const LabelWithIcon = ({text='text',children}) => {
  return (
    <div className='flex gap-5 w-fit px-3 py-2 font-semibold text-sm primary border border-solid items-center'>
        {children}
        <a href={`https://www.${text}`} target='_blank'>{text}</a>
    </div>
  )
}

export default LabelWithIcon
import React from 'react'

const Label = ({classNames='typeBadge typeBadge-bg',text='Full-time',borderClass=''}) => {
  return (
    <div className={`w-fit rounded-full px-3 py-1 font-semibold text-sm ${classNames} ${borderClass!=='' ? `${borderClass} border border-solid`:''}`}>
        {text}
    </div>
  )
}

export default Label
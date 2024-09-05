import React from 'react'

const PageHeading = ({page='jobs',title='All jobs',subtitle='Showing 32 results'}) => {
  return (
    <div className='flex justify-between items-center'>
        <div>
            <h3 className='text-3xl heading font-semibold clashDisplay mb-1'>{title}</h3>
            <div className='subtitle'>{subtitle}</div>
        </div>
        <div className={page==='jobs'?'flex gap-2':'hidden'}>
            <div className="subtitle">Sort By:</div>
            <select className='font-medium'>
                <option value="relevant">Most relevant</option>
                <option value="salarylth">Low to high: Salary</option>
                <option value="salaryhtl">High to low: Salary</option>
            </select>
        </div>  
    </div>
  )
}

export default PageHeading
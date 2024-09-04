import React from 'react'

const FindJobsHeading = () => {
  return (
    <div className='flex justify-between items-center'>
        <div>
            <h3 className='text-3xl heading font-semibold clashDisplay mb-1'>All jobs</h3>
            <div className='subtitle'>Showing 32 results</div>
        </div>
        <div className='flex gap-2'>
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

export default FindJobsHeading
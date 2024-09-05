import React from 'react'
import Label from './Label'
import Label2 from './Label2'

const Company = ({img='https://picsum.photos/80',companyType='Business Service',numberOfJobs='3',companyName='Nomad',companyDesc='Nomad is located in Paris, France. Nomad has generates $728,000 in sales (USD).'}) => {
  return (
    <div className='border p-5'>
        <div className="flex items-start justify-between mb-2">
            <div>
                <img src={img} alt="" className='size-16' />
            </div>
            <Label2 text={`${numberOfJobs} jobs`} />
        </div>
        <div className="flex flex-col gap-2">
            <div className='clashDisplay font-semibold heading text-2xl'>{companyName}</div>
            <div className='subtitle text-lg'>{companyDesc}</div>
            <div>
                <Label classNames='text-yellow-500' borderClass='border-yellow-500' text={companyType}/>
            </div>
        </div>
    </div>
  )
}

export default Company
import React from 'react'
import PageHeading from '../components/PageHeading'
import Company from  '../components/Company';

const CompanyList = () => {
  return (
    <div className='flex flex-col container mx-auto justify-between px-10 my-16 gap-7'>
        <PageHeading page='companies' title="Recommended Companies" subtitle='Based on your profile, company preferences, and recent activity' />
        <div className="grid grid-cols-3 gap-5">
            <Company />
            <Company />
            <Company />
            <Company />
            <Company />
            <Company />
        </div>
      </div>
  )
}

export default CompanyList
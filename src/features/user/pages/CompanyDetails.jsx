import React from 'react'
import CompanyDetailsHeading from '../components/CompanyDetailsHeading'
import CompanyDetailsBody from '../components/CompanyDetailsBody'
import OpenJobs from '../components/OpenJobs'

const CompanyDetails = () => {
  return (
    <>
        <CompanyDetailsHeading />
        <div className="container mx-auto px-10">
            <CompanyDetailsBody />
        </div>
        <OpenJobs />
    </>
  )
}

export default CompanyDetails
import React from 'react'
import Hero from '../components/Hero'
import Filter from '../components/Filter'
import PageHeading from '../components/PageHeading'
import JobList from '../components/JobList';

const FindJobs = () => {
  return (
    <>
      <Hero title='Find your' impText='dream job' subtitle='Find your next career at companies like HubSpot, Nike, and Dropbox'/>
      <div className='flex container mx-auto justify-between px-10 my-16 gap-7'>
        <div className="w-1/4"><Filter /></div>
        <div className="flex-grow flex flex-col gap-5">
          <PageHeading />
          <JobList />
        </div>
      </div>
    </>
  )
}

export default FindJobs
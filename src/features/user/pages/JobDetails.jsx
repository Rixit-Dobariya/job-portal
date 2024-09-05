import React from 'react'
import JobDetailsHeading from '../components/JobDetailsHeading';
import CompanyIntro from '../components/CompanyIntro';
import JobDetailsBody from '../components/JobDetailsBody';

const JobDetails = () => {
    return (
    <>
        <div>
            <JobDetailsHeading />
            <JobDetailsBody />
        </div>
        <CompanyIntro />
    </>
    )
}

export default JobDetails
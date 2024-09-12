import React from 'react'
import JobDetailsHeading from '../components/JobDetailsHeading';
import CompanyIntro from '../components/CompanyIntro';
import JobDetailsBody from '../components/JobDetailsBody';
import { useParams } from 'react-router-dom';
import OpenJobs from '../components/OpenJobs';

const JobDetails = () => {
    const {id}= useParams();
    return (
    <>
        Job id:{id}
        <div>
            <JobDetailsHeading />
            <JobDetailsBody />
        </div>
        <CompanyIntro />
        <OpenJobs title='Similar jobs' />
    </>
    )
}

export default JobDetails
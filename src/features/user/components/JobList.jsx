import React from 'react'
import Job from './Job'
import Pagination from './Pagination';
import { Link } from 'react-router-dom';

const JobList = () => {
  return (
    <div className='flex flex-col gap-5'>
        <Link to='1'>
          <Job />
        </Link> 
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
        <Pagination />
    </div>
  )
}

export default JobList
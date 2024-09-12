import React from 'react'
import Hero from '../components/Hero';
import CompanyList from '../components/CompanyList';
import OpenJobs from '../components/OpenJobs';

const HomePage = () => {
  return (
    <>
      <Hero page='home'/>
      <CompanyList />
      <OpenJobs title='Latest' impText='jobs open' page='home' />
    </>
  )
}

export default HomePage
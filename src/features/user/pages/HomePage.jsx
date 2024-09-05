import React from 'react'
import Hero from '../components/Hero';
import CompanyList from '../components/CompanyList';

const HomePage = () => {
  return (
    <>
      <Hero page='home'/>
      <CompanyList />
    </>
  )
}

export default HomePage
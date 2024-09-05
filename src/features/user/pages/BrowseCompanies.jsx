import React from 'react'
import Hero from '../components/Hero'
import CompanyList from '../components/CompanyList'
const BrowseCompanies = () => {
  return (
    <>
      <Hero title='Find your' impText='dream companies' subtitle='Find your next career at companies like HubSpot, Nike, and Dropbox'/>
      <CompanyList />
    </>
  )
}

export default BrowseCompanies
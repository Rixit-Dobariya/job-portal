import React from 'react'
import Heading from './Heading'
import SearchSection from './SearchSection';

const Hero = ({page="other",title="Discover more than", impText="5000+ jobs", subtitle='Great platform for the job seeker that searching for new career heights and passionate about startups.' }) => {
    return (
    <div className="banner-bg">
        <div className=" py-10  container mx-auto px-10">
            <div className={page==='other' ? 'flex-col flex items-center':'flex-col flex'}>
                <div className={page==='other'||'w-2/5'}>
                    <Heading title={title} impText={impText} subtitle={subtitle} page={page} />
                </div>
                <SearchSection page={page} />
            </div>
        </div>
    </div>
  )
}

export default Hero
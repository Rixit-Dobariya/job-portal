import React from 'react'

const JobDetailsHeading = () => {
    const jobDetails = {
        title:'Social Media Assistant',
        logo:'https://picsum.photos/80',
        companyName:'Stripe',
        companyLocation:'Rajkot,Gujarat',
        type:'Full-time'
    };
  return (
    <div className="banner-bg">
        <div className="container mx-auto px-10">
            <div className='flex-col flex py-5'>
                <div className='subtitle mb-5'>Home / jobs / <span className='text-black'>{jobDetails.title}</span></div>
                <div className='bg-white p-5 flex gap-5 items-center mb-5'>
                    <div>
                        <img src={jobDetails.logo} alt="" />
                    </div>
                    <div className='flex flex-col justify-center gap-1'>
                        <h3 className='heading clashDisplay font-semibold text-xl'>{jobDetails.title}</h3>
                        <h5 className='grey text-base'>{jobDetails.companyName} • {jobDetails.companyLocation} • {jobDetails.type}</h5>
                    </div>
                    <div className='ml-auto'>
                        <button className='text-white primary-bg py-3 px-9'>Apply</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default JobDetailsHeading
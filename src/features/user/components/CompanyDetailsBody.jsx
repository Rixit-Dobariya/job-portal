import React from 'react'
import { FaFacebookF,FaTwitter,FaLinkedin,FaArrowRight } from "react-icons/fa";
import LabelWithIcon from './LabelWithIcon';
import JobDetailsSection from './JobDetailsSection';
import {US,CN,GB,JP,AU} from 'country-flag-icons/react/3x2'

const CompanyDetailsBody = () => {
  return (
    <>
        <div className="flex gap-16 py-10">
            <div className='basis-2/3 flex flex-col gap-5'>
                <h3 className='text-3xl heading font-semibold clashDisplay mb-3'>Company Profile</h3>
                <p className='subtitle mb-5'>Stripe is a software platform for starting and running internet businesses. Millions of businesses rely on Stripe’s software tools to accept payments, expand globally, and manage their businesses online. Stripe has been at the forefront of expanding internet commerce, powering new business models, and supporting the latest platforms, from marketplaces to mobile commerce sites. We believe that growing the GDP of the internet is a problem rooted in code and design, not finance. Stripe is built for developers, makers, and creators. We work on solving the hard technical problems necessary to build global economic infrastructure—from designing highly reliable systems to developing advanced machine learning algorithms to prevent fraud.</p>
                <h3 className='text-3xl heading font-semibold clashDisplay mb-3'>Contact</h3>
                <div className="mb-5 flex flex-wrap gap-2 w-2/3">
                    <LabelWithIcon text='twitter.com/stripe'>
                        <FaTwitter />
                    </LabelWithIcon>
                    <LabelWithIcon text='facebook.com/StripeHQ'>
                        <FaFacebookF />
                    </LabelWithIcon>
                    <LabelWithIcon text='linkedin.com/company/stripe'>
                        <FaLinkedin />
                    </LabelWithIcon>
                </div>
                <div className="flex gap-5">
                    <img src="https://picsum.photos/300/200" alt="" className='basis-2/3'/>
                    <div className="flex flex-col basis-1/3 gap-5">
                        <img src="https://picsum.photos/300/200" alt="" />
                        <img src="https://picsum.photos/300/200" alt="" />
                    </div>
                </div>
            </div>
            <div className="basis-1/3 flex flex-col gap-5">
                <div>
                    <h3 className='text-3xl heading font-semibold clashDisplay mb-2'>Office Location</h3>
                    <p className='subtitle mb-5'>Stripe offices spread across 20 countries</p>
                    <div className="flex flex-col gap-3 font-semibold">
                        <div className='flex gap-3 items-center' >
                            <US title="United States" className='w-10' />
                            <p>United States</p>
                        </div>
                        <div className='flex gap-3 items-center' >
                            <GB title="United States" className='w-10' />
                            <p>England</p>
                        </div>
                        <div className='flex gap-3 items-center' >
                            <CN title="United States" className='w-10' />
                            <p>China</p>
                        </div>
                        <div className='flex gap-3 items-center' >
                            <JP title="United States" className='w-10 border' />
                            <p>Japan</p>
                        </div>
                        <div className='flex gap-3 items-center' >
                            <AU title="United States" className='w-10' />
                            <p>Australia</p>
                        </div>
                        <div className='flex gap-3 items-center mt-2'>
                            <h5 className='primary font-semibold'>View countries </h5>
                            <FaArrowRight className='primary font-semibold'/>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="border-bg border-t border my-5"></div>
        <div className='py-7 mb-5'>
            <JobDetailsSection title='Perks & Benefits' arr={[
                "Flexible working hours and the option to work remotely",
                "Opportunities for professional growth and career advancement",
                "Access to the latest social media tools and training resources",
                "Health and wellness programs, including gym memberships or wellness stipends",
                "Fun and collaborative work environment with team-building activities"
            ]} />
        </div>
    </>
  )
}

export default CompanyDetailsBody
import React from 'react'
import Label from '../components/Label';
import Badge from './Badge';
import { FaUsers,FaFireAlt,FaMapMarkerAlt,FaIndustry } from 'react-icons/fa';

const CompanyDetailsHeading = () => {
  return (
    <div>
        <div className="banner-bg">
            <div className="container mx-auto px-10">
                <div className='flex-col flex py-5'>
                    <div className='subtitle mb-5'>Home / companies / <span className='text-black'>Nomad</span></div>
                    <div className='p-5 flex gap-5 items-center mb-7'>
                        <div>
                            <img src="https://picsum.photos/180" alt="" />
                        </div>
                        <div className='flex flex-col justify-center gap-3'>
                            <div className="flex items-center gap-5">
                                <h3 className='heading clashDisplay font-semibold text-4xl'>Stripe</h3>
                                <Label text='3 jobs' borderClass='primary-b' classNames='primary bg-transparent rounded-none' />
                            </div>
                            <h5 className='primary text-base font-semibold mb-6'>https://stripe.com</h5>
                            <div className='flex gap-7'>
                                <div className='flex gap-3'>
                                    <Badge>
                                        <FaFireAlt className='size-5 lightBlue' />
                                    </Badge>
                                    <div className="flex flex-col gap-1">
                                        <h5 className='grey'>Founded</h5>
                                        <h6 className='heading font-semibold'>July 31, 2011</h6>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <Badge>
                                        <FaUsers className='size-5 lightBlue' />
                                    </Badge>
                                    <div className="flex flex-col gap-1">
                                        <h5 className='grey'>Employees</h5>
                                        <h6 className='heading font-semibold'>4000+</h6>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <Badge>
                                        <FaMapMarkerAlt className='size-5 lightBlue' />
                                    </Badge>
                                    <div className="flex flex-col gap-1">
                                        <h5 className='grey'>Location</h5>
                                        <h6 className='heading font-semibold'>20 Countries</h6>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <Badge>
                                        <FaIndustry className='size-5 lightBlue' />
                                    </Badge>
                                    <div className="flex flex-col gap-1">
                                        <h5 className='grey'>Industry</h5>
                                        <h6 className='heading font-semibold'>Payment Gateway</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CompanyDetailsHeading
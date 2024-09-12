import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const CompanyIntro = () => {
  return (
        <div className="py-10 container mx-auto px-10">
            <div className='flex items-center'>
                <div className="basis-1/2 pr-20">
                    <div className='flex gap-5 mb-7'>
                        <div>
                            <img src="https://picsum.photos/50" alt="" />
                        </div>
                        <div className='flex flex-col justify-center gap-1'>
                            <h3 className='heading clashDisplay font-semibold text-xl'>Stripe</h3>
                            <div className='flex gap-5 items-center'>
                                <h5 className='primary font-semibold'>Read more about Stripe </h5>
                                <FaArrowRight className='primary font-semibold'/>
                            </div>
                        </div>
                    </div>
                    <p className='subtitle'>
                        Stripe is a technology company that builds economic infrastructure for the internet. Businesses of every size—from new startups to public companies—use our software to accept payments and manage their businesses online.
                    </p>
                </div>
                <div className="basis-1/2 flex gap-5">
                    <img src="https://picsum.photos/300/200" alt="" className='basis-2/3'/>
                    <div className="flex flex-col basis-1/3 gap-5">
                        <img src="https://picsum.photos/300/200" alt="" />
                        <img src="https://picsum.photos/300/200" alt="" />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CompanyIntro
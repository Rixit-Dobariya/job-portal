import React from 'react'
import { FaRegCheckCircle } from "react-icons/fa";

const JobDetailsSection = ({title="Responsibility",arr=[
    "Manage and monitor social media accounts (e.g., Facebook, Twitter, Instagram, LinkedIn)",
    "Create and schedule engaging content (text, images, videos) tailored to the audience",
    "Respond to comments, messages, and customer inquiries promptly",
    "Analyze social media performance using tools like Google Analytics, Hootsuite, or similar",
    "Stay updated with the latest social media trends and tools"
]}) => {
  return (
    <div>
        <h3 className='text-3xl heading font-semibold clashDisplay mb-5'>{title}</h3>
        <div className='subtitle flex flex-col gap-2'>
            {
                arr.map((ele, index) =>{
                return <div className='flex gap-2' key={index}>
                    <FaRegCheckCircle className='text-green-400'/> 
                    <p>{ele}</p>
                </div>
                })
            }
        </div>
    </div>
  )
}

export default JobDetailsSection
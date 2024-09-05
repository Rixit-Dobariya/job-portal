import React from 'react'
import JobDetailsSection from '../components/JobDetailsSection';
import BorderLine from '../components/BorderLine';
import Label from '../components/Label';
import Label2 from '../components/Label2';

const JobDetailsBody = ({description='Stripe is looking for Social Media Marketing expert to help manage our online networks. You will be responsible for monitoring our social media channels, creating content, finding effective ways to engage the community and incentivize others to engage on our channels.',capacity=10,value=5}) => {
  return (
    <div className="py-10 container mx-auto px-10">
        <div className="flex gap-16">
            <div className='basis-2/3 flex flex-col gap-5'>
                <div>
                    <h3 className='text-3xl heading font-semibold clashDisplay mb-5'>Description</h3>
                    <div className='subtitle'>{description}</div>
                </div>
                <JobDetailsSection />
                <JobDetailsSection title='Who You Are' arr={[
                    "A creative thinker with a passion for social media and digital trends",
                    "Detail-oriented and able to manage multiple tasks efficiently",
                    "A strong communicator with excellent writing skills",
                    "Proactive and eager to learn, staying ahead of the latest social media developments",
                    "A team player who collaborates effectively with others"
                ]}/>
                <JobDetailsSection title='Nice-To-Haves' arr={[
                    "Experience with graphic design tools like Adobe Photoshop or Canva",
                    "Familiarity with social media scheduling tools such as Buffer or Hootsuite",
                    "Basic understanding of SEO and how it integrates with social media strategies",
                    "Experience in running paid social media campaigns (e.g., Facebook Ads, Instagram Ads)",
                    "Knowledge of influencer marketing and building partnerships with brand advocates"
                ]} />
                <JobDetailsSection title='Perks & Benefits' arr={[
                    "Flexible working hours and the option to work remotely",
                    "Opportunities for professional growth and career advancement",
                    "Access to the latest social media tools and training resources",
                    "Health and wellness programs, including gym memberships or wellness stipends",
                    "Fun and collaborative work environment with team-building activities"
                ]} />
            </div>
            <div className="basis-1/3">
                <div>
                    <h3 className='text-3xl heading font-semibold clashDisplay mb-5'>About this role</h3>
                    <div className="banner-bg px-3 py-5">
                        <div className='text-sm subtitle mb-2'><span className='font-semibold heading'>{value} applied</span> of {capacity} capacity</div>
                        <BorderLine capacity={capacity} value={value} />
                    </div>
                    <div className="flex flex-col gap-5 text-sm py-5">
                        <div className="flex justify-between">
                            <p className='subtitle'>Apply Before</p>
                            <p className='font-semibold'>July 31,2024</p>
                        </div>
                        <div className="flex justify-between">
                            <p className='subtitle'>Job posted on</p>
                            <p className='font-semibold'>July 1,2024</p>
                        </div>
                        <div className="flex justify-between">
                            <p className='subtitle'>Job Type</p>
                            <p className='font-semibold'>Full-time</p>
                        </div>
                        <div className="flex justify-between">
                            <p className='subtitle'>Salary</p>
                            <p className='font-semibold'>₹50,000 - ₹70,000 INR</p>
                        </div>
                    </div>
                    <div className="border-bg border-t border my-5"></div>
                    <div>
                        <h3 className='text-3xl heading font-semibold clashDisplay mb-6'>Categories</h3>
                        <div className="flex gap-3">
                            <Label classNames='text-yellow-400 bg-yellow-100' text='Marketing'/>
                            <Label text='Design'/>
                        </div>
                    </div>
                    <div className="border-bg border-t border my-9"></div>
                    <h3 className='text-3xl heading font-semibold clashDisplay mb-6'>Required Skills</h3>
                        <div className="flex gap-2 flex-wrap">
                            <Label2 text='Project Management'/>
                            <Label2 text='Copy writing'/>
                            <Label2 text='Social Media Marketing'/>
                            <Label2 text='English'/>
                            <Label2 text='Copy Editing'/>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default JobDetailsBody
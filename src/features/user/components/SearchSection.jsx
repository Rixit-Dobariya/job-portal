import React from 'react'
import { FaSearch,FaMapMarkerAlt } from "react-icons/fa";

const SearchSection = ({page="other"}) => {
  return (
    <>
        <div className='bg-white py-4 flex gap-3 items-center w-fit px-6 mt-8 shadow-lg' >
            <div className='flex items-center gap-2'>
                <FaSearch className='w-5 h-5 heading' />
                <input type="text" placeholder='Job title or keyword' className={page==='other'?'p-2 border-b-2 flex-grow':'p-2 border-b-2'} />
            </div>
            <div className='flex items-center gap-2'>
                <FaMapMarkerAlt className='w-5 h-5 heading' />
                <input type="text" placeholder='Location' className={page==='other'?'p-2 border-b-2 flex-grow':'p-2 border-b-2'} />
            </div>
            <button className='primary-bg text-white px-7 py-3'>
                {page==='other'?'Search':'Search my job'}
            </button>
        </div>
        <div className='grey mt-3'>Popular : UI Designer, UX Researcher, Android, Admin</div>
    </>
  )
}

export default SearchSection
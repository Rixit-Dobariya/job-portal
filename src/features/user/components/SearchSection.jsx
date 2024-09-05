import React from 'react'
import { FaSearch,FaMapMarkerAlt } from "react-icons/fa";

const SearchSection = ({page="other"}) => {
  return (
    <>
        <div className={`bg-white py-4 flex items-center px-6 mt-8 shadow-lg ${page==='other'?'self-stretch mx-36 gap-5':'w-fit gap-3'}`} >
            <div className={`flex items-center gap-2 ${page==='other' ? 'flex-grow': ''}`}>
                <FaSearch className='w-5 h-5 heading' />
                <input type="text" placeholder='Job title or keyword' className={`p-2 border-b-2 ${page==='other'?'flex-grow':''}`} />
            </div>
            <div className={`flex items-center gap-2 ${page==='other' ? 'flex-grow': ''}`}>
                <FaMapMarkerAlt className='w-5 h-5 heading' />
                <input type="text" placeholder='Location' className={`p-2 border-b-2 ${page==='other'?'flex-grow':''}`} />
            </div>
            <button className='primary-bg text-white px-7 py-3 ms-2'>
                {page==='other'?'Search':'Search my job'}
            </button>
        </div>
        <div className='grey mt-3'>Popular : UI Designer, UX Researcher, Android, Admin</div>
    </>
  )
}

export default SearchSection
import React from 'react'
import { Link } from 'react-router-dom'
import { FaAngleLeft,FaAngleRight} from 'react-icons/fa'

const Pagination = ({page='jobs'}) => {
  return (
    <div class="flex gap-2 navLink justify-center items-center ">
        <FaAngleLeft />
        <Link to={`/${page}/1`} className='p-2 px-4  font-semibold page-active ' >1</Link>
        <Link to='/1' className='p-2 px-4 font-semibold' >2</Link>
        <Link to='/1' className='p-2 px-4  font-semibold' >3</Link>
        <Link to='/1' className='p-2 px-4  font-semibold ' >4</Link>
        <Link to='/1' className='p-2 px-4  font-semibold ' >5</Link>
        <Link to='/1' className='p-2 px-4  font-semibold ' >...</Link>
        <Link to='/1' className='p-2 px-4  font-semibold ' >10</Link>
        <FaAngleRight />
    </div>
  )
}

export default Pagination
import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa";

const FilterSection = ({title, listItems}) => {
    const [isOpen,setOpen]=useState(true);
    let listStyle ={display: isOpen?"flex":"none"};
    function toggler(){
        setOpen(prevState=>{

            return !prevState;
        })
    }
  return (
    <div>
        <div className='flex justify-between mb-4 cursor-pointer items-center' onClick={toggler} >
            <h3 className='font-bold text-lg heading'>{title}</h3>
            <FaAngleDown className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}/>
        </div>
        <ul className='flex flex-col grey gap-4 mb-3' style={listStyle}>
            {
                listItems.map((listItem,i)=><li key={i}><input type="checkbox" className='me-2 h-4 w-4 font-normal text-base border-b ' />{listItem}</li>)
            }
        </ul>
    </div>
  )
}

export default FilterSection
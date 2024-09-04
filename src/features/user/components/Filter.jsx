import React from 'react'
import FilterSection from './FilterSection'

const Filter = () => {
  const filterArray = [
    {
      title:'Type of Employment',
      listItems:[
        "Full-time (3)",
        "Part-time (5)",
        "Remote (10)"
      ]
    },
    {
      title:'Type of Employment',
      listItems:[
        "Full-time (3)",
        "Part-time (5)",
        "Remove (10)"
      ]
    },
    {
      title:'Type of Employment',
      listItems:[
        "Full-time (3)",
        "Part-time (5)",
        "Remove (10)"
      ]
    }
  ];
  return (
    <div className='px-10 border flex flex-col gap-2 py-5'>
      {filterArray.map((filter,index)=><FilterSection key={index} title={filter.title} listItems={filter.listItems} />)}
    </div>
  )
}

export default Filter
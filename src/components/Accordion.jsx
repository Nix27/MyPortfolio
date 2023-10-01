import React, { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'

const Accordion = ({ category, categorySkills }) => {
  const [toogleSkills, setToggleSkills] = useState(false)  

  return (
    <div className='flex flex-col'>
        <div className='flex justify-between items-center px-5 bg-dark-purple-100' onClick={() => setToggleSkills(prev => !prev)}>
            <div className='w-[90%]'>
                <span className='gradient-text-110 text-[1.3rem]'>{category}</span>
            </div>
            <BsChevronDown className={`${toogleSkills ? 'rotate-180' : ''} transition-all w-[20px] h-[20px] text-primary-cyan`} />
        </div>
        <div className={`${toogleSkills ? 'h-full py-2' : 'h-0 py-0'} transition-all px-3 bg-primary-gray`}>
            <ul className={`${toogleSkills ? 'block' : 'hidden'} flex flex-col`}>
                {categorySkills.map(skill => (
                    <li key={skill.id} className='text-primary-cyan list-disc ml-3'>
                        {skill.text}
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Accordion
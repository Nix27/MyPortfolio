import React from 'react'

const LinkButton = ({ externalLink, iconLink, text }) => {
  return (
    <a href={externalLink} target='_blank' className={`flex justify-between items-center gap-3 ${text ? 'rounded-[10px]' : ''} px-2 ${text ? 'bg-dark-purple-200' : ''} ${text ? '' : 'w-[110px]'} text-white cursor-pointer`}>
        <img src={iconLink} alt='platform icon' className={`${text ? 'rounded-full' : ''} ${text ? 'w-[25px]' : 'w-[100%] h-[100%]'}`} />
        {text && <span className='text-[0.7rem]'>{text}</span>}
    </a>
  )
}

export default LinkButton
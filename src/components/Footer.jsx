import React from 'react'
import { TfiLinkedin } from 'react-icons/tfi'
import { GrMail } from 'react-icons/gr'

const Footer = () => (
  <footer className='flex flex-col items-center bg-dark-purple-100 py-5 mt-24'>
    <span className='gradient-text-110 font-ink-free font-bold text-[2rem]'>Contact</span>

    <div className='flex items-center gap-2 text-[1.5rem]'>
      <a href='https://www.linkedin.com/in/nikola-ze%C4%8Di%C4%87-31b9a3280/' target='_blank' className='text-primary-cyan block transition-all hover:scale-110'>
        <TfiLinkedin />
      </a>
      <a href='mailto:zecicnikola2468@gmail.com' target='_blank' className='text-primary-cyan block pt-1 transition-all hover:scale-110'>
        <GrMail />
      </a>
    </div>
  </footer>
)

export default Footer
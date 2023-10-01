import React from 'react'
import { profileImage } from '../assets'
import { TfiLinkedin } from 'react-icons/tfi'
import {AiFillGithub } from 'react-icons/ai'
import { GrMail } from 'react-icons/gr'

const About = () => (
  <section id='about' className='lg:h-[100vh] flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-between gap-5 px-10 overflow-hidden'>
    <div className='flex justify-center lg:w-[40%]'>
      <img src={profileImage} alt='profile image' className='rounded-[9.9375rem]' />
    </div>

    <div className='flex flex-col gap-2 lg:w-[50%]'>
      <h2 className='gradient-text-180 text-[2.5rem]'>Hi, I'm Nikola</h2>
      <p className='gradient-text-110 text-[1.2rem]'>
        Passionate, final year, software engineering student.
        Interested in software development, especially web
        development using latest technologies. I believe that
        for every request or problem is possible to find optimal
        digital solution that will effectivelly solve a problem.
      </p>

      <div className='flex gap-3 text-[1.5rem] lg:text-[1.3rem] mt-2'>
        <a href='https://www.linkedin.com/in/nikola-ze%C4%8Di%C4%87-31b9a3280/' target='_blank' className='text-primary-cyan block transition-all hover:scale-110'>
          <TfiLinkedin />
        </a>
        <a href='mailto:zecicnikola2468@gmail.com' target='_blank' className='text-primary-cyan block transition-all hover:scale-110'>
          <GrMail />
        </a>
        <a href='https://github.com/Nix27' target='_blank' className='text-primary-cyan block transition-all hover:scale-110'>
          <AiFillGithub />
        </a>
      </div>
    </div>
  </section>
)

export default About
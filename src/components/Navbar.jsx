import React, { useState } from 'react'
import { Logo } from '../assets'
import { navbarLinks } from '../content'
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  const[toogleMenu, setToggleMenu] = useState(false)

  return (
    <nav className='w-[100%] flex fixed justify-between px-10 py-2 bg-dark-purple-200'>
      <div className='flex items-center gap-2'>
        <img src={Logo} alt='logo' className='w-10' />
        <span className="gradient-ink-free-text text-[1.7rem] pt-1 font-bold">Nix Web Dev</span>
      </div>

      <ul className='hidden sm:flex gap-3'>
        {navbarLinks.map(link => (
          <li key={link.id} className='transition-all hover:scale-110'>
            <a href={`#${link.id}`} className='gradient-ink-free-text text-[1.4rem] font-bold'>{link.text}</a>
          </li>
        ))}
      </ul>
      
      <div className='flex sm:hidden py-2'>
          <AiOutlineMenu className='text-primary-cyan text-[1.2rem]' onClick={() => setToggleMenu(true)} />

          <div className={`${toogleMenu ? "top-4" : "top-[-500px]"} transition-all flex justify-center items-center w-[90%] h-[200px] absolute
          left-[50%] translate-x-[-50%] border-2 border-primary-cyan bg-dark-purple-200`}>
            <ul className='flex flex-col'>
              {navbarLinks.map(link => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className='gradient-ink-free-text text-[1.4rem] font-bold' onClick={() => setToggleMenu(false)}>{link.text}</a>
                </li>
              ))}
            </ul>
            <button className='bg-dark-purple-200 text-primary-cyan border-2 border-primary-cyan px-3 py-2 rounded-[50%] absolute bottom-[-20px]' onClick={() => setToggleMenu(false)}>X</button>
          </div>
      </div>
    </nav>
  )
}

export default Navbar
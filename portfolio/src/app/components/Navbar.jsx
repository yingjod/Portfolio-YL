"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import { MenuOverlay } from './MenuOverlay'
import Image from 'next/image'
import barIcon from '../../../public/barIcon.png'
import crossIcon from '../../../public/cross.png'

const navLinks = [
  {
    id: 'about',
    title: 'About',
    path: '#about',
  },
  {
    id: 'projects',
    title: 'Projects',
    path: '#projects',
  },
  {
    id: 'contact',
    title: 'Contact',
    path: '#contact',
  },
]



export const Navbar = () => {

  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#FFE9D1] bg-opacity-100 navbar'>
      <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
        <Link href={'/'} className='text-2xl md:text-5xl text-white font-semibold ml-10 mt-5 mb-5'>
          <Image
            src='/images/logo.png'
            alt='logo image'
            height={50}
            width={50}
            className='h-10 w-7 md:h-16 md:w-10 lg:h-16 lg:w-19 navlogo' // Responsive size classes
          />
        </Link>
        <div className='mobile-menu block md:hidden'>
          {
            !navbarOpen ? (
              <button onClick={() => setNavbarOpen(true)} className='flex items-center mr-2 px-3 py-2  text-slate-200 hover:text-white hover:border-white bg-white'>
                <Image src={barIcon} alt='barIcon' height={30} width={30} />
              </button>
            ) : (
              <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 text-slate-200 hover:text-white hover:border-white'>
                <Image src={crossIcon} alt='barIcon' height={40} width={40} />
              </button>
            )
          }
        </div>
        <div className='menu hidden md:block md:w-auto' >
          <ul className='flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-0 mr-10'>
            {
              navLinks.map((link, index) => (
                <button key={index}>
                  <NavLink
                    href={link.path}
                    title={link.title}
                    setNavbarOpen={setNavbarOpen}
                  />
                </button>
              ))
            }
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} setNavbarOpen={setNavbarOpen} /> : null}
    </nav>
  )
}

export default Navbar
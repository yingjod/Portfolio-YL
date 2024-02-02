"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import { Bars3Icon, XmarkIcon } from '@heroicons/react/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MenuOverlay } from './MenuOverlay'
import Image from 'next/image'
import barIcon from '../../../public/barIcon.png'
import crossIcon from '../../../public/cross.png'

const navLinks = [
  {
    id: 'about', // 为每个链接指定一个唯一的 ID
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

function scrollToTarget(targetId) {
  const navbarHeight = document.querySelector('.navbar').offsetHeight;
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    const offset = 100; // 或者可以設定為其他你需要的值
    window.scrollTo({
      top: targetPosition - offset,
      behavior: 'smooth',
    });
    console.log(`Scrolling to target with ID: ${targetId}`);
  }
}

export const Navbar = () => {

  const [navbarOpen, setNavbarOpen] = useState(false)
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
              <Image src={barIcon} alt='barIcon' height={30} width={30}/>
              </button>
            ) : (
              <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 text-slate-200 hover:text-white hover:border-white'>
              <Image src={crossIcon} alt='barIcon' height={40} width={40}/>
              </button>
            )
          }
        </div>
        <div className='menu hidden md:block md:w-auto' >
          <ul className='flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-0 mr-10'>
            {
              navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink 
                  href={link.path} 
                  title={link.title}
                  onClick={() => {
                    console.log('Link clicked');
                    scrollToTarget(link.id);
                    setNavbarOpen(false);
                  }}
                  />
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}


export default Navbar
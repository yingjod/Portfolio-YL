import React from 'react'
import NavLink from './NavLink'

export const MenuOverlay = ({ links, setNavbarOpen}) => {

  return (
    <ul className='flex flex-col py-4 items-center bg-[#FFE9D1]'>
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} setNavbarOpen={setNavbarOpen} />
        </li>
      ))}
    </ul>
  )
}

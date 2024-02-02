import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='footer border z-10 border-t-[#fbfbfb] border-l-transparent  border-r-transparent text-white'>
        <p className='text-white-600 text-center p-12'>
          © Ying Li {currentYear}
        </p>
    </footer>
  )
}

export default Footer
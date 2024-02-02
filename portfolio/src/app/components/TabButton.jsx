import React from 'react'

const variants = {
  default: { width: 0 },
  active: { width: 'calc(100%-0.75rem)' }
}

export const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? 'text-[#FC6F2F]'
    : 'text-[#ADB7BE]'

  return (
    <button onClick={selectTab}>
      <p className={`mr-10 font-semibold hover:text-white ${buttonClasses}`}>
        |{children}|
      </p>
    </button>
  )
}

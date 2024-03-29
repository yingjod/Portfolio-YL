import React from 'react'

export const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? 'text-[#FC6F2F] border-[#FC6F2F]'
    : 'text-[#ADB7BE] border-[#767676] hover:border-white'

  return (
    <button className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={()=>onClick(name)}
    >
      {name}
    </button>
  )
}

export default ProjectTag

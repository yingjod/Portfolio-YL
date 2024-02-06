import Link from "next/link"

const NavLink = ({ href, title, setNavbarOpen }) => {

  const handleClick = () => {
    console.log("Clicked me!");
    console.log(typeof setNavbarOpen);
    if (setNavbarOpen) {
      setNavbarOpen(false);
      console.log("false");
    }
  }

  return (
    <a href={href} className='block py-2 pl-3 pr-4 text-[#FC6F2F] sm:text-xl rounded md:p-0 hover:text-white font-bold'
    onClick={handleClick} >
      [  {title}  ]
    </a>
  )
}

export default NavLink



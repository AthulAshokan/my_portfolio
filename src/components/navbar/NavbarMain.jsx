import React,{useState} from 'react'
import NavbarLogo from './NavbarLogo'
import NavbarLinks from './NavbarLinks'
import NavbarBtn from './NavbarBtn'
import { GiHamburgerMenu } from "react-icons/gi";

function NavbarMain() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-1/2 z-20 flex gap-4 mt-1">
      <div className='flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-[0.5px] border-orange'>
      <NavbarLogo />
      <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
        <NavbarLinks />
      </div>
      <NavbarBtn />
      </div>
      <div className='flex lg:hidden sm:block p-6 bg-black  rounded-full items-center justify-center border-[0.5px] border-orange'>
        <button className='text-2xl text-white p-3 border border-orange rounded-full '
        onClick={toggleMenu}>
        <GiHamburgerMenu />
        </button>

      </div>

    </nav>
  
  )
}

export default NavbarMain

import { useState } from "react"
import { hamburger, times } from "../assets/icons"
import { headerLogo } from "../assets/images"
import { navLinks } from "../constants"

const Nav = () => {
  const[toggle, setToggle] = useState(false);

  const toggleMobileMenu = () => {
    setToggle(!toggle)
  }
  return (
    <header 
      className="w-full z-10 padding-x py-8 absolute">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" 
            width={130}
            height={29}          
          />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="font-montserrat text-lg leading-normal text-slate-gray hover:text-black">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Designing the mobile */}
        <div 
          onClick={toggleMobileMenu}
          className='max-lg:block hidden cursor-pointer'
        >
          <img 
            src={ toggle ? times : hamburger }    alt="hamburger" 
            width={25}
            height={25}
          />

     
          { toggle && (
            <div  className="bg-white-200 w-[260px] h-[290px] rounded-xl mt-4 mr-8 px-9 absolute right-0 text-center backdrop-blur-md max-lg:w-[300px] max-lg:h-[300px] max-lg:shadow-2xl"> 
              <ul className="max-lg:block ml-10  py-6">
                {navLinks.map((item) => (
                  <li key={item.label} className="py-4">
                    <a href={item.href} className="font-montserrat text-lg leading-normal text-slate-700 px-3 py-2 hover:text-white-400 hover:bg-slate-gray hover:rounded-md">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Nav
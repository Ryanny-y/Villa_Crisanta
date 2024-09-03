import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import useChangeHeaderBg from '../../utils/hooks/useChangeHeaderBg'

const Header = () => {

  const [ headerClass, setHeaderClass ] = useState(`fixed top-0 left-0 right-0 bg-transparent text-white font-poppins py-3 z-40 duration-500`);

  const [ toggleSideNav, setToggleSideNav ] = useState(false);

  useChangeHeaderBg(setHeaderClass);

  return (
    <header className={headerClass}>
      <div className="container flex justify-between items-center gap-2">
        <Link to='/' className="header-logo flex gap-5 items-center">
           <img src="images/vclogo.png" alt="Logo" className="w-10 h-10 md:h-12 md:w-12"/>
          <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide break-word hover:text-yellow-500 duration-200">Villa Crisanta Spring Resort</h1>
        </Link>
        
        <nav className="nav hidden md:block">
          <ul className="font-semibold text-white flex gap-5 text-nowrap">
            <a className="hover:text-yellow-500 duration-200" href='#'>HOME</a>
            <a className="hover:text-yellow-500 duration-200" href='#about-us'>ABOUT</a>
            <a className="hover:text-yellow-500 duration-200" href='#contact'>CONTACT</a>
            <a className="hover:text-yellow-500 duration-200" href='#book'>BOOK NOW</a>
          </ul>
        </nav>

        <nav className="nav block md:hidden">
          <FontAwesomeIcon icon={faBars} onClick={() => setToggleSideNav(prev => !prev)} className="hover:text-yellow-500 duration-200"/>
          
          <ul className={`fixed top-0 bottom-0 right-0 ${toggleSideNav ? 'left-1/2 xxs:left-2/3 sm:left-3/4' : 'left-full'} duration-200 bg-dark font-semibold text-white flex pl-7 sm:pl-10 pr-5 sm:pr-7 py-20 text-end flex-col gap-5 text-nowrap`}>
            <FontAwesomeIcon icon={faX} className="absolute top-10 right-5 sm:right-7 hover:text-yellow-500 duration-200" onClick={() => setToggleSideNav(prev => !prev) }/>

            <a className="hover:text-yellow-500 duration-200" href='#'>HOME</a>
            <a className="hover:text-yellow-500 duration-200" href='#about-us'>ABOUT</a>
            <a className="hover:text-yellow-500 duration-200" href='#contact'>CONTACT</a>
            <a className="hover:text-yellow-500 duration-200" href='#book'>BOOK NOW</a>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
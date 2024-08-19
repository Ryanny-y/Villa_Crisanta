import { Link } from "react-router-dom";
import { useState } from "react";
import useChangeHeaderBg from '../../utils/hooks/useChangeHeaderBg'

const Header = () => {

  const [ headerClass, setHeaderClass ] = useState('fixed top-0 left-0 right-0 bg-transparent text-white font-poppins py-3 z-40 duration-500');

  useChangeHeaderBg(setHeaderClass);

  return (
    <header className={headerClass}>
      <div className="container flex justify-between items-center">
        <Link to='/Villa_Crisanta/' className="header-logo flex gap-2 items-center">
          <img src="images/vclogo.png" alt="Logo" className="w-10 h-10 md:h-12 md:w-12"/>
          <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide break-word">Villa Crisanta Spring Resort</h1>
        </Link>
        
        <nav className="nav hidden md:block">
          <ul className="font-semibold text-white flex gap-5">
            <a href='#'>HOME</a>
            <a href='#about-us'>ABOUT</a>
            <a href=''>CONTACT</a>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
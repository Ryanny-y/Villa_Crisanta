import { Link } from "react-router-dom";
import { useState } from "react";
import useChangeHeaderBg from '../../utils/hooks/useChangeHeaderBg'

const Header = () => {

  const [ headerClass, setHeaderClass ] = useState('');

  useChangeHeaderBg(setHeaderClass);

  return (
    <header className={headerClass}>
      <div className="container flex justify-between items-center">
        <Link className="header-logo flex gap-2 items-center">
          <img src="images/vclogo.png" alt="Logo" className="h-12 w-12"/>
          <h1 className="text-white text-3xl font-semibold tracking-wide">Villa Crisanta Spring Resort</h1>
        </Link>
        
        <nav className="nav">
          <ul className="font-semibold text-white flex gap-5">
            <Link to=''>HOME</Link>
            <Link to=''>ABOUT</Link>
            <Link to=''>CONTACT</Link>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
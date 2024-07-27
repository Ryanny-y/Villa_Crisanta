import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { changeHeaderBg } from '../../utils/hooks/changeHeaderBg';

export default function HeaderNav() {
  
  const [ headerClass, setHeaderClass ] = useState('fixed top-0 left-0 right-0 bg-transparent text-white font-poppins z-50');
  const logo = 'images/vclogo.png'
  const [ isToggled, setIsToggled ] = useState(false);
  const btnClass = `${isToggled ? 'hidden' : 'block'} md:hidden text-2xl`;
  const sideHeaderClass = `${isToggled ? 'left-1/2': 'left-full'} fixed top-0 bottom-0 right-0 left-1/2 flex flex-col gap-5 font-semibold bg-black p-7 duration-300`;

  changeHeaderBg(setHeaderClass);

  return (
    <header className={headerClass}>
      <div className="container mx-auto flex items-center justify-between py-3">
        <Link to='/' className='flex items-center gap-3 font-semibold text-xl md:text-3xl'>
          <img src={logo} alt="" className='h-10 w-10 md:h-12 md:w-12'/>
          <p>Villa Crisanta Spring Resort</p>
        </Link>

        <nav>
          <ul className='hidden md:flex items-center gap-5 font-semibold'>
            <li><a href="#">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>

          <button className={btnClass} onClick={() => setIsToggled(curState => !curState)}>
            <FontAwesomeIcon icon={faBars} />
          </button>

          <ul className={sideHeaderClass}>
            <button className='text-3xl self-end' onClick={() => setIsToggled(curState => !curState)}><FontAwesomeIcon icon={faXmark} /></button>
            <li><a href="#">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>

      </div>
    </header>
  )
}
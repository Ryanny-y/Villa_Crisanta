import AdminLogout from "../../auth/AdminLogout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin_SideNav = ({ sideNavWidth, toggleSideNav }) => {
  const [ showToolTip, setShowToolTip ] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className='fixed flex flex-col items-center justify-between py-3 px-2 bg-yellow-600 top-0 bottom-0 left-0 z-30 duration-200' style={{ width: sideNavWidth}}>
      <div className='flex items-center justify-center flex-col gap-2 border-b text-light border-light pb-2 relative'>
        <img src="images/vclogo.png" alt="Villa Logo" className={`${sideNavWidth === '11rem' ? 'h-12' : 'h-7'}`}/>
        <h1 className={`font-semibold ${sideNavWidth === '11rem' ? 'text-xl' : 'text-sm'} text-center`}>Villa Crisanta <br /> Admin Panel</h1>
        {sideNavWidth === '11rem' 
          ? <i 
              className='bx bx-menu-alt-right absolute top-0 bx-md -right-3' 
              onClick={toggleSideNav}
            ></i>
          : <i 
              className='bx bx-menu-alt-left absolute top-0 bx-xs -right-5 bg-yellow-600 text-white rounded-full p-1.5' 
              onClick={toggleSideNav}
            ></i>
        }

      </div>

      <div id="bottom" className={`flex ${sideNavWidth === '11rem' ? 'flex-row' : 'flex-col-reverse gap-4'} items-center px-3 w-full justify-between text-white`}>
        <AdminLogout sideNavWidt={sideNavWidth}/>
        <button className="text-3xl relative" onClick={() => navigate('/')}>
          <FontAwesomeIcon className="z-10" icon={faLocationArrow} onMouseEnter={() => setShowToolTip(true)} onMouseLeave={() => setShowToolTip(false)}/>
          <p className={` duration-500 ${showToolTip ? 'opacity-1' : 'opacity-0'} text-xs font-medium absolute ${sideNavWidth === '11rem' ? 'right-3 -top-7  ' : 'left-5 bg-yellow-600 py-3 px-2 rounded-md -top-10'} -z-10`}>Go To Website</p>
        </button>
      </div>
    </nav>
  );
};

export default Admin_SideNav;

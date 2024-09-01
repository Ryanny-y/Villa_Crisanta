import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from '../../context/AdminContext';

const AdminLogout = ({ sideNavWidth }) => {
  const [ showToolTip, setShowToolTip ] = useState(false);
  const { setIsAuthorized, setAccessToken } = useContext(AdminContext);
  const navigate = useNavigate(); 

  const handleAdminLogout = async () => {
    try {
      const response = await fetch('http://localhost:3500/logout-admin', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },  credentials: 'include'
      });

      if(!response.ok) {
        const errData = await response.json();
        const errMsg = errData.message || errData.statusText;
        throw new Error(errMsg);
      }

      setIsAuthorized(false);
      setAccessToken('');
      navigate('/Villa_Crisanta/admin');

    } catch (error) {
      console.log(error.message)
    }

  }
  return (
    <button 
      className="relative" 
      onClick={handleAdminLogout}
      onMouseEnter={() => setShowToolTip(true)} 
      onMouseLeave={() => setShowToolTip(false)}
    >
        <i className='bx bx-log-out bx-md'></i>
        <p className={`${sideNavWidth === '11rem' ? 'right-5 -top-5' : 'left-8 bg-yellow-600 py-3 px-2 rounded-md -top-6'} text-xs absolute text-light font-medium duration-500 ${showToolTip ? 'opacity-1' : 'opacity-0'} -z-10`}>Logout</p>
    </button>
  )
};

export default AdminLogout;

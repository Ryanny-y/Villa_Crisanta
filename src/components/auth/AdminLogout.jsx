import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from '../../context/AdminContext';

const AdminLogout = () => {
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
        <p className={`text-sm absolute -top-4 left-5 text-light font-semibold duration-700 ${showToolTip ? 'opacity-1' : 'opacity-0'}`}>Logout</p>
    </button>
  )
};

export default AdminLogout;

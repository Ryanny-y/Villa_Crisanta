import { createContext, useState } from "react";
import AdminLogin from "../components/auth/AdminLogin";

export const AdminContext = createContext({});

const AdminProvider = ({ children }) => {
  const [ isAuthorized, setIsAuthorized ] = useState(false);
  const [ accessToken , setAccessToken ] = useState('');
  
  const value = {
    isAuthorized, setIsAuthorized,
    accessToken, setAccessToken
  };

  return (
    <AdminContext.Provider value={value}>
      {isAuthorized 
        ? children
        : <AdminLogin setIsAuthorized={setIsAuthorized} setAccessToken={setAccessToken}/>}
    </AdminContext.Provider>
  )

};

export default AdminProvider;
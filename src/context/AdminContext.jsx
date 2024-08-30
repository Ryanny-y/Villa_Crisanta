import { createContext, useState } from "react";

export const AdminContext = createContext({});

const AdminProvider = ({ children }) => {
  const [ isAuthorized, setIsAuthorized ] = useState(true);
  

  const value = {

  };

  return (
    <AdminContext.Provider value={value}>
      {isAuthorized 
        ? children
        : <p>Login First</p>}
    </AdminContext.Provider>
  )

};

export default AdminProvider;
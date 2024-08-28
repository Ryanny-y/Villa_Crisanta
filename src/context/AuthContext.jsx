import { createContext, useState } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [ verified, setVerified ] = useState(false);

  const value = {
    verified, setVerified
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )

};

export default AuthProvider;

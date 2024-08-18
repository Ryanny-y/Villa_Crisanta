import { createContext, useState } from "react";

export const VillaContext = createContext();

const VillaProvider = ({ children }) => {
  const [ villaDetails, setVillaDetails ] = useState({});
  
  
  const value = {
    villaDetails, setVillaDetails
  }
  return (
    <VillaContext.Provider value={value}>
      {children}
    </VillaContext.Provider>
  )
}

export default VillaProvider
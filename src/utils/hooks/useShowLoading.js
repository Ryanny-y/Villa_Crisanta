import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";


const useShowLoading = () => {

  const { setLoading } = useOutletContext();
  
  useEffect(() => {
    setLoading(true);
  }, [])

};

export default useShowLoading;
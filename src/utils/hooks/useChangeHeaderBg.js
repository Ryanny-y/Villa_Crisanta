import { useEffect } from "react";

export default function useChangeHeaderBg(setHeaderClass) {

  useEffect(() => {
    const changeBg = () => {
      const bgClass = window.scrollY > window.innerHeight ? 'bg-dark-bg' : 'bg-transparent';
      setHeaderClass(`fixed top-0 left-0 right-0 ${bgClass} text-white font-poppins py-3 z-40 duration-500`);
    };  
    window.addEventListener('scroll', changeBg)

    return () => {
      window.removeEventListener('scroll', changeBg);
    }
  });
}
import { useEffect } from "react";

export function changeHeaderBg(setHeaderClass) {

  useEffect(() => {
    const changeBg = () => {
      const bgClass = scrollY > window.innerHeight ? 'bg-black' : 'bg-transparent';
      setHeaderClass(`fixed top-0 left-0 right-0 ${bgClass} text-white font-poppins z-50 duration-500`);

    };  
    window.addEventListener('scroll', changeBg)

    return () => {
      window.removeEventListener('scroll', changeBg);
    }
  });
}
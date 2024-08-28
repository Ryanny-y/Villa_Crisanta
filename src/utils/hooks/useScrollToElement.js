import { useEffect} from "react";
import { useLocation } from "react-router-dom";

const useScrollToElement = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToHash = () => {
      if (location.hash === '#book') {
        const element = document.querySelector(location.hash);
        if (element) {
          window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
          });
        }
      } else {
        window.scrollTo(0, 0)
      }
    };
    scrollToHash();
  }, [location.hash]);
};

export default useScrollToElement;

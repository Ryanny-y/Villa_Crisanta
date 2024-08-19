import { useState, useEffect } from 'react';

const useImageLoader = (src) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgLoaded(true);
    };
  }, [src]);

  return imgLoaded;
};

export default useImageLoader;

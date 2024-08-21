import { useEffect, useState } from 'react'
import useImageLoader from '../../../utils/hooks/useImageLoader';

const GalleryImage = ({ order, setShowImg }) => {
  const [ imgLayout, setImgLayout ] = useState('');
  const imgSrc = `images/photo_gallery/villa1/gallery-${order}.webp`;
  const imgLoaded = useImageLoader(imgSrc);

  useEffect(() => {
    if(['1', '11', '13', '16'].includes(order)) {
      setImgLayout('md:row-span-2')
    } else if (['14', '10'].includes(order)) {
      setImgLayout('md:col-span-2')
    } else if (['3', '17'].includes(order)) {
      setImgLayout('md:col-span-2 md:row-span-2');
    }
  }, [order])

  return (
    <div 
      className={`${imgLayout} object-cover overflow-hidden`}
      style={{
        background: `url(images/photo_gallery/villa1/small/gallery-${order}.png) no-repeat center / cover`,
      }}
    >
      <img
        data-aos={`${imgLoaded && 'fade'}`}
        data-aos-duration="1000"
        src={`images/photo_gallery/villa1/gallery-${order}.webp`}
        alt="Gallery Img"
        className={`
          ${imgLoaded ? 'opacity-100' : 'opacity-0'}
          transition-all duration-1000 
          h-full w-full rounded-md img
          brightness-75 cursor-pointer ease-in-out object-cover
        `}
        loading='lazy'
        onClick={() => setShowImg(order)}
      />

    </div>
  );
  
}

export default GalleryImage
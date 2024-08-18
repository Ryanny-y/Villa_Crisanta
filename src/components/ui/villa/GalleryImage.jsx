import { useEffect, useState } from 'react'
import useImageLoader from '../../../utils/hooks/useImageLoader';

const GalleryImage = ({ order, setShowImg }) => {
  const [ imgLayout, setImgLayout ] = useState('');
  const imgSrc = `images/photo_gallery/villa1/gallery-${order}.webp`;
  const imgLoaded = useImageLoader(imgSrc);
  const [ imgHovered, setImgHovered ] = useState(false);

  useEffect(() => {
    if([1, 11, 13, 16].includes(order)) {
      setImgLayout('md:row-span-2')
    } else if ([14, 10].includes(order)) {
      setImgLayout('md:col-span-2')
    } else if ([3, 17].includes(order)) {
      setImgLayout('md:col-span-2 md:row-span-2');
    }
  }, [order])

  return (
    <div className={`${imgLayout} bg-[url("images/photo_gallery/villa1/small/gallery-${order}.png")] bg-cover bg-center object-cover overflow-hidden`}data-aos="slide-up" data-aos-duration="1000">
      <img src={imgSrc} alt="Gallery Img" className={`${imgLoaded ? 'opacity-100' : 'opacity-0'} transition-all duration-0 h-full w-full rounded-md img ${imgHovered && 'scale-110 brightness-100'} duration-500 brightness-75 cursor-pointer`} loading='lazy' onMouseEnter={() => setImgHovered(true)} onMouseLeave={() => setImgHovered(false)} onClick={() => setShowImg(order)}/>
    </div>
  )
}

export default GalleryImage
import { useEffect } from 'react';
import useImageLoader from '../../../utils/hooks/useImageLoader';

const AmenitiesImgCard = ({ img, aos }) => {

  const imgSrc = `images/villa1/${img}.webp`
  const imgLoaded = useImageLoader(imgSrc);
  
  return (
    <div className={`amenity-img-card flex-1 h-72 p-5 shadow-lg ${ imgLoaded ? `bg-none` : `bg-[url('images/villa1/small/${img}.png')]`} bg-cover bg-center object-cover`} data-aos={aos}>
      <img src={`images/villa1/${img}.webp`} alt="Amenity Image" className={`h-full w-full ${imgLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}/>
    </div>
  )
}

export default AmenitiesImgCard
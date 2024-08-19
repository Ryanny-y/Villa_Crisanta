import useImageLoader from '../../../utils/hooks/useImageLoader';

const AmenitiesImgCard = ({ img, aos }) => {

  const imgSrc = `images/villa1/${img}.webp`
  const imgLoaded = useImageLoader(imgSrc);
  
  return (
    <div 
      className={`amenity-img-card flex-1 basis-52 max-w-80 h-72 p-5 shadow-lg object-cover`} data-aos={aos}
      style={{ background: `${!imgLoaded ? `url(images/villa1/small/${img}.png)` : `white`}  no-repeat center / cover`}}
    >
      <img src={`images/villa1/${img}.webp`} alt="Amenity Image" className={`h-full w-full ${imgLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`} loading='lazy'/>
    </div>
  )
}

export default AmenitiesImgCard
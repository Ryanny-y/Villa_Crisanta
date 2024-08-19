import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { useContext, useState } from 'react'
import useImageLoader from '../../../utils/hooks/useImageLoader'
import { VillaContext } from '../../../context/VillaContext'

const PropertyBox = ({ aos, duration, img, property }) => {
  const imgSrc = `images/landing/${img}.webp`;
  const imgLoaded = useImageLoader(imgSrc);
  const { setVillaDetails } = useContext(VillaContext); 

  return (
    <Link to='villa' onClick={() => {setVillaDetails(property)}} className="py-4 px-7 relative basis-80 flex-grow bg-dark rounded-sm" style={{ height: '500px' }} data-aos={aos} data-aos-duration={duration}>
      <div className={`bg-[url('images/landing/small/${img}.png')] bg-cover bg-center rounded-sm brightness-70 h-full w-full`}>
        <img src={imgSrc} alt="Villa Img" className={`h-full w-full ${!imgLoaded ? 'opacity-0' : 'opacity-1'} transition-opacity duration-100 object-cover`}/>
      </div>

      <div className="details flex flex-col items-start gap-2 absolute bottom-10 left-8 right-8 p-3 rounded-sm bg-white">
        <h1 className="font-bold text-lg md:w-1/2 leading-tight tracking-wide">VILLA CRISANTA 1 SPRING RESORT</h1>
        <address className="underline text-sm font-semibold">Blk 26, Lot 8, Geneva Lake St., Phase 2, Lakewood Subd., Brgy. Tadlac, 4030 Los Baños Laguna</address>
        <button className='text-sm font-semibold hover:text-yellow-500'>View Page <FontAwesomeIcon icon={faArrowRight} className='ml-1'/></button>
      </div>
    </Link>
  )
}

export default PropertyBox
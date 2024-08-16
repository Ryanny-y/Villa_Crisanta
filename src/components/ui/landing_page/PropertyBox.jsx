import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

const PropertyBox = () => {
  return (
    <div className="animate-float py-4 px-7 relative flex-grow bg-dark rounded-sm" style={{ height: '500px' }}>
      <div className="bg-[url('images/landing/villa-1.webp')] bg-no-repeat bg-cover bg-center h-full rounded-sm brightness-70"></div>

      <div className="details flex flex-col items-start gap-2 absolute bottom-10 left-8 right-8 p-3 rounded-sm bg-white">
        <h1 className="font-bold text-lg md:w-1/2 leading-tight tracking-wide">VILLA CRISANTA 1 SPRING RESORT</h1>
        <address className="underline text-sm font-semibold">Blk 26, Lot 8, Geneva Lake St., Phase 2, Lakewood Subd., Brgy. Tadlac, 4030 Los Baños Laguna</address>
        <button className='text-sm font-semibold hover:text-yellow-500'>View Page <FontAwesomeIcon icon={faArrowRight} className='ml-1'/></button>
      </div>
    </div>
  )
}

export default PropertyBox
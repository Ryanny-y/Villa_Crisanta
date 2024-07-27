import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../../assets/css/animations.css';

export default function PropertyBox({data}) {
  const OuterLink = ({ href, children }) => (
    <span className="font-semibold text-sm italic cursor-pointer" onClick={() => window.open(href, '_blank')}>
      {children}
    </span>
  );

  const linkClass = `bounce p-7 relative w-full bg-black text-black hover:hover-shadow property-box`
  
  return (
    <Link to='/Villa' className={linkClass} style={{height: '500px'}}>
      <div className="absolute top-7 bottom-7 right-7 left-7" style={{
        background: `url(src/assets/images/landing_page/${data.background_img}) no-repeat center / cover`,
        filter: 'brightness(80%)'
      }}></div>

      <div className="flex flex-col justify-between gap-2 absolute bottom-10 right-10 left-10 bg-white p-3">
        <h1 className="font-bold tracking-wide w-full lg:w-1/2">{data.name.toUpperCase()}</h1>
        <OuterLink href={data.addressLink}>
          {data.address}
        </OuterLink>
        <p className="text-sm font-bold hover:text-yellow-600 duration-200">View Page <FontAwesomeIcon icon={faArrowRight} className="ml-1"/></p>
      </div>
    </Link>
    
  )
}
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function HeroSection() {



  return (
    <section className="relative h-svh">
      <div className="container">
        <div className="bg-image absolute top-0 bottom-0 right-0 left-0" style={{
          background: "url(./src/assets/images/landing_page/Hero-bg.jpg) no-repeat center / cover",
          filter: 'brightness(66%)'
        }}></div>

        <div className="absolute z-10 flex flex-col gap-2 right-0 left-0 items-center justify-center h-full text-white text-center">
          <h1 className="text-5xl font-bold tracking-wide w-full md:w-3/5 leading-normal">Stay with us in comfort in Villa Crisanta!</h1>
          <p className='text-lg font-semibold'><FontAwesomeIcon icon={faLocationDot} className='mr-1'/> LOS BAÑOS, LAGUNA</p>
        </div>
      </div>
    </section>
  )

}
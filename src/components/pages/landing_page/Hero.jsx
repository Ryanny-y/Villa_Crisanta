import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
  return (
    <section id="hero"
      className='relative h-svh flex items-center justify-center
      after:absolute after:top-0 after:h-full after:right-0 after:w-full after:bg-hero-bg after:bg-cover after:bg-center after:bg-no-repeat after:brightness-70
      '
    >
      <div className="container relative z-10">
        <div className="hero-title flex flex-col items-center justify-center gap-5 text-white text-center">
          <h1 className='font-bold tracking-wider text-4xl sm:text-5xl md:w-4/6 leading-snug'>Stay with us in comfort in Villa Crisanta!</h1>
          <p className='font-medium text-lg md:text-xl tracking-wide'><FontAwesomeIcon icon={faLocationDot} className='mr-1 text-lg'/> LOS BAÑOS, LAGUNA</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
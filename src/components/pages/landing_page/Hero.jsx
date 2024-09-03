import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
  return (
    <section id="hero"
      className='relative h-svh flex items-center justify-center'
      data-aos="fade-down" data-aos-duration="800"
    >
      <div className='absolute top-0 left-0 w-full h-full brightness-70'>
        <img src="./images/landing/hero-bg.jpg" alt="" className='h-full w-full object-cover' />
      </div>
      
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
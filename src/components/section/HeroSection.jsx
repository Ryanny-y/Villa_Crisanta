import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function HeroSection({data}) {

  const id = data?.id;

  const h1Class = `text-5xl ${id ? 'font-extrabold' : 'font-bold'} leading-tight mb-3 tracking-wide w-10/12 ${id ? 'sm:w-96' : 'md:w-3/5'} leading-normal`;
  return (
    <section className="relative h-svh">
      <div className="container">
        <div className="bg-image absolute top-0 bottom-0 right-0 left-0" style={{
          background: `url(images/landing_page/${data.background_img}) no-repeat center / cover`,
          filter: `brightness(${id ? '55%': '60%'})`
        }}></div>

        <div className="absolute z-10 flex flex-col gap-2 right-0 left-0 items-center justify-center h-full text-white text-center">
          {id && <p className='font-semibold text-lg'>Welcome to</p>}
          <h1 className={h1Class}>{data.name}</h1>
          <p className='text-base font-semibold'>{!id && <FontAwesomeIcon icon={faLocationDot} className='mr-1'/>} {data.subHeader}</p>
        </div>
      </div>
    </section>
  )

}
import { useContext } from "react";
import { VillaContext } from "../../../context/VillaContext";

const VillaHero = () => {
  const { villaDetails } = useContext(VillaContext);

  return (
    <section
      id="hero"
      className='relative h-svh flex items-center justify-center'
      data-aos="fade-down"
      data-aos-duration="800"
    >
      <div className='absolute top-0 left-0 w-full h-full brightness-70'>
        <img src={`./images/${villaDetails.path}/${villaDetails.background_img}.webp`} alt="" className='h-full w-full object-cover' />
      </div>

      <div className="container relative z-10">
        <div className="hero-title flex flex-col items-center justify-center gap-5 text-white text-center">
          <p className="font-sm font-bold">Welcome to</p>
          <h1 className="font-bold tracking-wider text-5xl sm:text-6xl w-11/12 md:w-4/6 lg:w-1/2 leading-snug">
            {villaDetails.name}
          </h1>
          <p className="font-semibold text-base md:text-lg tracking-wide">
            BEDROOMS | SWIMMING POOLS | CONFERENCE ROOM | BILLIARDS
          </p>
        </div>
      </div>
    </section>
  );
};

export default VillaHero;

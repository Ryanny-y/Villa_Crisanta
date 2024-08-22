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
      <div className="bg-image absolute top-0 left-0 bottom-0 right-0"
        style={{
          background: `url("images/${villaDetails.path}/${villaDetails.background_img}.webp") no-repeat center / cover`,
          filter: 'brightness(50%)'
        }}>
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

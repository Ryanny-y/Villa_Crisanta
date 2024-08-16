
const AboutBox = ({ title, img, description}) => {

  return (
    <div className={`about-box flex gap-10 md:gap-20 flex-col ${title === 'AMENITIES' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}>

      <div className={`w-10/12 md:basis-2/5 bg-black h-72 rounded-md relative flex-shrink-0
        after:absolute after:top-5 after:-bottom-5 ${title === 'AMENITIES' ? 'after:right-5 after:-left-5' : 'after:-right-5 after:left-5'} after:border after:border-black after:rounded-md after:z-10`}
      >
        <img src={`images/landing/${img}`} alt="About Image" loading="lazy" className="w-full h-full relative z-20 rounded-md"/>
      </div>
  
      <div className="details flex flex-col gap-3 items-center justify-center text-center basis-3/5">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-sm font-semibold w-4/5 md:w-full">{description}</p>
      </div>
    </div>
  );
  
}

export default AboutBox
import useImageLoader from '../../../utils/hooks/useImageLoader';

const AboutBox = ({ title, img, description, aos }) => {
  const imgSrc = `images/landing/${img}.jpg`;
  const imgLoaded = useImageLoader(imgSrc)

  return (
    <div className={`about-box flex gap-10 md:gap-20 flex-col ${title === 'AMENITIES' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}>

      <div className={`w-10/12 md:basis-2/5 bg-black h-72 rounded-md relative flex-shrink-0
        bg-[url("images/landing/small/${img}.png")] bg-center bg-cover object-cover
        after:absolute after:top-5 after:-bottom-5 ${title === 'AMENITIES' ? 'after:right-5 after:-left-5' : 'after:-right-5 after:left-5'} after:border after:border-black after:rounded-md after:z-10`} data-aos={aos}
      >
        <img src={imgSrc} alt="About Image" loading="lazy" className={`w-full h-full relative z-20 rounded-md ${imgLoaded ? 'opacity-1' : 'opacity-0'} transition-opacity duration-200`}/>
      </div>
  
      <div className="details flex flex-col gap-3 items-center justify-center text-center basis-3/5" data-aos="slide-up" data-aos-duration="800">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-sm font-semibold w-4/5 md:w-full">{description}</p>
      </div>
    </div>
  );
  
}

export default AboutBox
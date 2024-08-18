import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Swiper } from 'swiper/react';
import { useEffect, useState, useRef } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function LandingSlider({ children }) {
  const [landingSize, setLandingSize] = useState('500px');
  const swiperRef = useRef(null);

  // CHANGE THE SIZE IF RESIZED
  useEffect(() => {
    const changeSize = () => {
      if (window.innerWidth < 768) {
        setLandingSize('350px');
      } else {
        setLandingSize('500px');
      }
    };

    window.addEventListener('resize', changeSize);

    return () => {
      window.removeEventListener('resize', changeSize);
    }
  }, []);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="landing-slider w-5/6 md:w-4/5 mx-auto relative" style={{ height: landingSize }}>
      <Swiper
        ref={swiperRef}
        pagination={{
          clickable: true,
          el: '.swiper-custom-pagination',
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + `<img src="images/photo_gallery/landing/slider-${index + 1}.webp" alt="Photo Gallery Img" loading="lazy" class="h-full w-full"/>` + '</span>';
          },
        }}
        modules={[Pagination]}
        className="mySwiper h-full"
        style={{
          '--swiper-pagination-bottom': '-20px',
        }}
      >
        {children}
      </Swiper>
      <div className="swiper-custom-pagination flex items-center justify-center gap-1 sm:gap-2 flex-wrap mt-3" />

      {/* Custom Navigation */}
      <div className="custom-navigation-buttons text-4xl">
        <button className="swiper-button-prev absolute top-1/2 -left-7 md:-left-10 z-10" onClick={handlePrev}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="swiper-button-next absolute top-1/2 -right-7 md:-right-10 z-10" onClick={handleNext}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}

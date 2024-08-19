import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const VillaSlider = ({ children }) => {
  const [ sliderHeight, setSliderHeight ] = useState('500px')

  return (
    <div className="villa-slider w-5/6 md:w-4/5 mx-auto relative">
      <swiper-container space-between="10" 
        slides-per-view="1" 
        navigation-next-el=".swiper-button-next"
        navigation-prev-el=".cswiper-button-prev"
        breakpoints={
          JSON.stringify({
              608: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              950: {
                slidesPerView: 3,
                spaceBetween: 20
              }
          })
        }
        style={{
          height: sliderHeight,
        }}
      >
            {children}
        </swiper-container>

      <button className="swiper-button-prev absolute text-3xl md:text-4xl top-1/2 -left-7 md:-left-10 z-10">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      <button className="swiper-button-next absolute text-3xl md:text-4xl top-1/2 -right-7 md:-right-10 z-10">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  )
}

export default VillaSlider
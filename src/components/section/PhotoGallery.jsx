import '../../assets/css/swiper.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function PhotoGallery() {

  return (
    <div className="container mx-auto photo-gallery relative">
      <swiper-container 
        slides-per-view="1" 
        space-between="20" 
        navigation-next-el=".custom-next-button"
        navigation-prev-el=".custom-prev-button"
        // pagination-clickable="true"
        autoplay-delay="2000"

        style={{
          height: "400px",
          position: "relative",
          width: "80%",
          "--swiper-navigation-color": "#202020", 
          "--swiper-pagination-color": "#202020",
          "--swiper-navigation-bullet-size": "100px"
        }}
        >
          <swiper-slide>Slide1</swiper-slide>
          <swiper-slide>Slide2</swiper-slide>
          <swiper-slide>Slide3</swiper-slide>
          <swiper-slide>Slide4</swiper-slide>
          <swiper-slide>Slide5</swiper-slide>
      </swiper-container>

      <div className='nav-btn custom-prev-button'>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>

      <div className='nav-btn custom-next-button'>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </div>
  )
}
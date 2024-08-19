import SectionLayout from '../../layout/SectionLayout';
import HeaderTitle from '../../common/HeaderTitle';
import LandingSlider from '../../ui/landing_page/LandingSlider';
import { SwiperSlide } from 'swiper/react';
import { useState } from 'react';

const PhotoGallery = () => {

  const galleryImg = [
    'slider-1',
    'slider-2',
    'slider-3',
    'slider-4',
    'slider-5',
    'slider-6',
    'slider-7',
    'slider-8',
    'slider-9',
    'slider-10'
  ];

  const [ imgLoaded, setImgLoaded ] = useState(false);
  const handleLoad = () => {
    setImgLoaded(true);
  }

  return (
    <SectionLayout sectionId="photo-gallery">
      <HeaderTitle title="Photo Gallery"/>

      <LandingSlider>
        {galleryImg.map(img => (
          <SwiperSlide key={img}>
            <div 
              className={`shadow-lg object-cover w-full h-full`}
              style={{ background: `url("images/photo_gallery/landing/small/${img}.png") no-repeat center / cover`}}
            >
              <img src={`images/photo_gallery/landing/${img}.webp`} alt="Room Image" className={`h-full shadow-lg w-full ${imgLoaded ? 'opacity-1' : 'opacity-0'} transition-opacity duration-1000 object-cover`} onLoad={handleLoad}/>
            </div>
          </SwiperSlide>
        ))}
      </LandingSlider>
    </SectionLayout>
  );
};

export default PhotoGallery;

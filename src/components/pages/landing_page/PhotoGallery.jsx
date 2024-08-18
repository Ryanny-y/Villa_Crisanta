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
            <div className={`bg-[url("images/photo_gallery/landing/small/${img}.png")] bg-cover bg-center object-cover h-full w-full`}>
              <img 
                src={`images/photo_gallery/landing/${img}.webp`} 
                alt="Photo Gallery Img" 
                loading="lazy"
                className={`h-full w-full ${imgLoaded ? 'opacity-1' : 'opacity-0'} transition-opacity duration-1000`} 
                aria-label={`Photo gallery image ${img.split('/').pop().split('-')[1]}`}
                onLoad={handleLoad}
              />
            </div>
          </SwiperSlide>
        ))}
      </LandingSlider>
    </SectionLayout>
  );
};

export default PhotoGallery;

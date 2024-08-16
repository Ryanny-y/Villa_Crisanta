import SectionLayout from '../../layout/SectionLayout';
import HeaderTitle from '../../common/HeaderTitle';
import LandingSlider from '../../ui/landing_page/LandingSlider';
import { SwiperSlide } from 'swiper/react';

const PhotoGallery = () => {

  const galleryImg = [
    'images/photo_gallery/landing/slider-1.webp',
    'images/photo_gallery/landing/slider-2.webp',
    'images/photo_gallery/landing/slider-3.webp',
    'images/photo_gallery/landing/slider-4.webp',
    'images/photo_gallery/landing/slider-5.webp',
    'images/photo_gallery/landing/slider-6.webp',
    'images/photo_gallery/landing/slider-7.webp',
    'images/photo_gallery/landing/slider-8.webp',
    'images/photo_gallery/landing/slider-9.webp',
    'images/photo_gallery/landing/slider-10.webp'
  ];

  return (
    <SectionLayout sectionId="photo-gallery">
      <HeaderTitle title="Photo Gallery"/>

      <LandingSlider>
        {galleryImg.map(img => (
          <SwiperSlide key={img} >
            <img 
              src={img} 
              alt="Photo Gallery Img" 
              loading="lazy"
              className='h-full w-full'
              aria-label={`Photo gallery image ${img.split('/').pop().split('-')[1]}`}
            />
          </SwiperSlide>
        ))}
      </LandingSlider>
    </SectionLayout>
  );
};

export default PhotoGallery;

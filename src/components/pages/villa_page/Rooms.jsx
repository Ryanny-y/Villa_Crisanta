import SectionLayout from '../../layout/SectionLayout';
import VillaHeaderTitle from '../../common/VillaHeaderTitle';
import VillaSlider from '../../ui/villa/VillaSlider';
import { useContext } from 'react';
import { VillaContext } from '../../../context/VillaContext';
import { useState } from 'react';

const Rooms = () => {
  const { villaDetails } = useContext(VillaContext);

  const [ imgLoaded, setImgLoaded ] = useState(false);
  const handleLoad = () => {
    setImgLoaded(true);
  } 

  return (
    <SectionLayout sectionId="rooms">
      <VillaHeaderTitle title="ROOMS"/>

      <VillaSlider>
        {villaDetails.room_imgs.map(room => (
          <swiper-slide key={room} lazy="true">
            <div className={`h-full shadow-lg w-full bg-[url("images/villa1/small/${room}.png")] bg-cover bg-center object-cover`}>
              <img src={`images/villa1/rooms/${room}.webp`} alt="Room Image" className={`h-full shadow-lg w-full ${imgLoaded ? 'opacity-1' : 'opacity-0'} transition-opacity duration-1000`} onLoad={handleLoad} loading='lazy'/>
            </div>
          </swiper-slide>
        ))}
      </VillaSlider>
    </SectionLayout>
  )
}

export default Rooms
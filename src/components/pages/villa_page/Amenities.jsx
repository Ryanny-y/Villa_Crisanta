import SectionLayout from '../../layout/SectionLayout';
import HeaderTitle from '../../common/HeaderTitle'
import { useContext } from 'react';
import { VillaContext } from '../../../context/VillaContext';
import AmenitiesWrapper from '../../ui/villa/AmenitiesWrapper';
import AmenitiesImgCard from '../../ui/villa/AmenitiesImgCard';

const Amenities = () => {

  const { villaDetails } = useContext(VillaContext);

  return (
    <SectionLayout sectionId="amenities">
      <HeaderTitle title="WHAT THIS PLACE OFFERS"/>

      <div className="grid grid-cols-1 xxs:grid-cols-2 md:grid-cols-4 gap-10 w-full md:w-4/5 mx-auto justify-between">
        {villaDetails.amenities.map(amenity => {
          const [ amenityName, icon ] = Object.entries(amenity)[0];
          
          return <AmenitiesWrapper key={amenityName} amenity={amenityName} icon={icon}/>
        })}
      </div>

      <div className='flex md:w-4/5 mx-auto gap-10 items-center'>
        <AmenitiesImgCard img='amenities-1' aos={'fade-right'}/>
        <AmenitiesImgCard img='amenities-2' aos={'fade-up'}/>
        <AmenitiesImgCard img='amenities-3' aos={'fade-left'}/>
      </div>
    </SectionLayout>
  )
}

export default Amenities
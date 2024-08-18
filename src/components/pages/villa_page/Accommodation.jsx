import SectionLayout from '../../layout/SectionLayout';
import VillaHeaderTitle from '../../common/VillaHeaderTitle';
import AccommodationCard from '../../ui/villa/AccommodationCard';
import { useContext } from 'react';
import { VillaContext } from '../../../context/VillaContext';

const Accommodation = () => {

  const { villaDetails: { accommodation_rates: accRates }} = useContext(VillaContext);

  return (
    <SectionLayout sectionId='accommodation-rates'>
      <VillaHeaderTitle title='ACCOMODATION RATES'/>

      <div className="accommodations flex items-stretch justify-center gap-20 lg:gap-10 mt-10 flex-wrap">
        {accRates.map(rate => {
          return <AccommodationCard key={rate.id} days={rate.days} rates={rate.rates} duration={rate.duration}/>
        })}
      </div>
    </SectionLayout>
  )
}

export default Accommodation
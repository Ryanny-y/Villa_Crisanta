import SectionLayout from "../../layout/SectionLayout";
import HeaderTitle from '../../common/HeaderTitle';
import PropertyBox from "../../ui/landing_page/PropertyBox";
import { useContext } from "react";
import { VillaContext } from "../../../context/VillaContext";

const Property = () => {

  const { villaData } = useContext(VillaContext)

  return (
    <SectionLayout sectionId='property'>
      <HeaderTitle title='Choose Between Our Two Cozy Villas'/>

      <div className="flex start flex-col md:flex-row justify-center gap-10 w-11/12 md:w-9/12 mx-auto">
        <PropertyBox aos="zoom-in" duration="800" img="villa-1" property={villaData[0]}/>
        <PropertyBox aos="zoom-in" duration="800" img="villa-2" property={villaData[0]}/>
      </div>
    </SectionLayout>
  )
}

export default Property
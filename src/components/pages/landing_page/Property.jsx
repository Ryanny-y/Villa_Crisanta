import SectionLayout from "../../layout/SectionLayout";
import HeaderTitle from '../../common/HeaderTitle';
import PropertyBox from "../../ui/landing_page/PropertyBox";

const Property = () => {


  return (
    <SectionLayout sectionId='property'>
      <HeaderTitle title='Choose Between Our Two Cozy Villas'/>

      <div className="flex start flex-col md:flex-row justify-center gap-10 w-11/12 md:w-9/12 mx-auto">
        <PropertyBox aos="zoom-in" duration="800" img="villa-1"/>
        <PropertyBox aos="zoom-in" duration="800" img="villa-2"/>
      </div>
    </SectionLayout>
  )
}

export default Property
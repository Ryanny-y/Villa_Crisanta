import SectionLayout from "../../layout/SectionLayout";
import HeaderTitle from '../../common/HeaderTitle';
import PropertyBox from "../../ui/landing_page/PropertyBox";

const Property = () => {
  return (
    <SectionLayout sectionId='property'>
      <HeaderTitle title='Choose Between Our Two Cozy Villas'/>

      <div className="flex start justify-center gap-10 w-9/12 mx-auto">
        <PropertyBox />
        <PropertyBox />
      </div>
    </SectionLayout>
  )
}

export default Property
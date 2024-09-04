import SectionLayout from "../../layout/SectionLayout";
import HeaderTitle from "../../common/HeaderTitle";
import PropertyBox from "../../ui/landing_page/PropertyBox";
import { useContext } from "react";
import { VillaContext } from "../../../context/VillaContext";

const Property = () => {
  const { villaData } = useContext(VillaContext);

  return (
    <SectionLayout sectionId="property">
      <HeaderTitle title="Choose Between Our Two Cozy Villas" />

      <div className="flex flex-wrap justify-center gap-10 w-11/12 md:w-9/12 mx-auto">
        <PropertyBox
          aos="zoom-in"
          duration="800"
          img="villa-1"
          property={villaData[0]}
          name='VILLA CRISANTA 1 SPRING RESORT'
          address='Blk 26, Lot 8, Geneva Lake St., Phase 2, Lakewood Subd., Brgy. Tadlac, 4030 Los Baños Laguna'
        />
        <PropertyBox
          aos="zoom-in"
          duration="800"
          img="villa-2"
          property={villaData[1]}
          name='VILLA CRISANTA 2 SPRING RESORT'
          address='Blk 26, Lot 10, Barcroft Lake St., Phase 2, Lakewood Executive Subd., Brgy. Tadlac, 4030 Los Baños Laguna'
        />
      </div>
    </SectionLayout>
  );
};

export default Property;

import VillaHero from "./villa_page/VillaHero";
import VillaAbout from "./villa_page/VillaAbout";
import Rooms from "./villa_page/Rooms";
import Amenities from "./villa_page/Amenities";
import Accommodation from "./villa_page/Accommodation";
import VillaPhotoGallery from "./villa_page/VillaPhotoGallery";
import Contact from "../common/Contact";
import Booking from "../common/Booking";
import VideoContainer from "../common/VideoContainer";
import useShowLoading from '../../utils/hooks/useShowLoading';
import useScrollToElement from "../../utils/hooks/useScrollToElement";

const Villa = () => {
  useShowLoading();
  useScrollToElement();  

  return (
    <main className="landing-page flex flex-col">
      <VillaHero />
      <VideoContainer />
      <VillaAbout />
      <Rooms />
      <Amenities />
      <VillaPhotoGallery />
      <Accommodation />
      <Booking />
      <Contact />
    </main>
  );
};

export default Villa;

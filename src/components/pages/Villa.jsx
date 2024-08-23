import VillaHero from "./villa_page/VillaHero";
import VillaAbout from "./villa_page/VillaAbout";
import Rooms from "./villa_page/Rooms";
import Amenities from "./villa_page/Amenities";
import useScrollToTop from "../../utils/hooks/useScrollToTop";
import Accommodation from "./villa_page/Accommodation";
import VillaPhotoGallery from "./villa_page/VillaPhotoGallery";
import Contact from "../common/Contact";
import Booking from "../common/Booking";
import VideoContainer from "../common/VideoContainer";

const Villa = () => {
  useScrollToTop();

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

import VillaHero from "./villa_page/VillaHero";
import VillaAbout from "./villa_page/VillaAbout";
import Rooms from "./villa_page/Rooms";
import Amenities from "./villa_page/Amenities";
import useScrollToTop from "../../utils/hooks/useScrollToTop";
import Accommodation from "./villa_page/Accommodation";
import VillaPhotoGallery from "./villa_page/VillaPhotoGallery";
import Contact from '../common/Contact'

const Villa = () => {
  useScrollToTop();

  return (
    <main className="landing-page flex flex-col">
      <VillaHero />
      <VillaAbout />
      <Rooms />
      <Amenities />
      <VillaPhotoGallery />
      <Accommodation />
      <Contact />
    </main>
  )
}

export default Villa
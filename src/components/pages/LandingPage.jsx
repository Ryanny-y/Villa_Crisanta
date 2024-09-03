import Hero from "./landing_page/Hero";
import Property from "./landing_page/Property";
import About from "./landing_page/About";
import PhotoGallery from "./landing_page/PhotoGallery";
import Team from "./landing_page/Team";
import Contact from "../common/Contact";
import Booking from "../common/Booking";
import useScrollToElement from "../../utils/hooks/useScrollToElement";
import useShowLoading from "../../utils/hooks/useShowLoading";

const LandingPage = () => {
  useShowLoading();
  useScrollToElement();  

  return (
    <main className="landing-page flex flex-col">
      <Hero />
      <Property />
      <About />
      <PhotoGallery />
      <Team />
      <Booking />
      <Contact />
    </main>
  )
}

export default LandingPage
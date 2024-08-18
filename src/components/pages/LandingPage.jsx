import Hero from "./landing_page/Hero";
import Property from "./landing_page/Property";
import About from "./landing_page/About";
import PhotoGallery from "./landing_page/PhotoGallery";
import Team from "./landing_page/Team";
import useScrollToTop from "../../utils/hooks/useScrollToTop";

const LandingPage = () => {

  useScrollToTop();

  return (
    <main className="landing-page flex flex-col">
      <Hero />
      <Property />
      <About />
      <PhotoGallery />
      <Team />
    </main>
  )
}

export default LandingPage
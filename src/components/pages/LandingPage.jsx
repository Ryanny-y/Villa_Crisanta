import Hero from "./landing_page/Hero";
import Property from "./landing_page/Property";
import About from "./landing_page/About";
import PhotoGallery from "./landing_page/PhotoGallery";
import Team from "./landing_page/Team";
import Contact from "../common/Contact";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import Booking from "../common/Booking";
import useScrollToElement from "../../utils/hooks/useScrollToElement";

const LandingPage = () => {

  const { setLoading } = useOutletContext();

  useScrollToElement();  
  
  useEffect(() => {
    setLoading(true);
  }, [])

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
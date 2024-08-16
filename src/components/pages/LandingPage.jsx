import Hero from "./landing_page/Hero";
import Property from "./landing_page/Property";
import About from "./landing_page/About";

const LandingPage = () => {
  return (
    <main className="landing-page flex flex-col gap-16">
      <Hero />
      <Property />
      <About />
    </main>
  )
}

export default LandingPage
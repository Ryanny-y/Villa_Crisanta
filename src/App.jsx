import HeaderNav from './components/common/HeaderNav';
import HeroSection from './components/section/HeroSection';
import { villaData } from './data/villaData';
import PropertyBox from './components/ui/PropertyBox';
import AboutSection from './components/section/AboutSection';
import PhotoGallery from './components/section/PhotoGallery';
import TeamSection from './components/section/TeamSection';
import Footer from './components/common/Footer';

function App() {

  return (
    <>
      <HeaderNav />
      <main className='flex flex-col gap-20 font-poppins'>
        <HeroSection/>

        <section className='container mx-auto'>
          <h1 className='font-semibold text-2xl md:text-4xl tracking-wide text-center text-black mb-5 underline underline-offset-4 w-4/5 md:w-full mx-auto'>Choose Between Our Two Cozy Villas!</h1>

          <div className='w-full lg:w-10/12 flex flex-col md:flex-row mx-auto items-center justify-center gap-10'>
            {villaData.map((villa, i)=> (
              <PropertyBox key={i} data={villa}/>
            ))}
          </div>
        </section>

        <AboutSection/>
          
        <PhotoGallery />
        <TeamSection/>
        
        <Footer />
      </main>
    </>
  )
}

export default App

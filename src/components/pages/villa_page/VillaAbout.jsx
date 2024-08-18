import { useContext } from "react"
import { VillaContext } from "../../../context/VillaContext"
import FeatureCard from "../../ui/villa/FeatureCard"

const VillaAbout = () => {
  const { villaDetails } = useContext(VillaContext);
  console.log(villaDetails);
  

  return (
    <section id="about-us">
      <div className="container flex flex-col gap-8">
        <header className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-10">
          <h1 className="font-bold text-3xl md:text-4xl">What space to utilize</h1>
          <p className="text-xs md:text-sm py-2 px-3 border border-dark rounded-sm font-semibold">Recommended up to 25 pax (4 rooms) Maximum up to 35 pax (5 rooms)</p>
        </header>

        <div className="flex flex-wrap items-stretch justify-center gap-5 md:gap-10">
          <FeatureCard feature={villaDetails.totalBedrooms} description="Bunk beds, Air-conditioned rooms" imgs={['bunk-bed.png', 'aircon.png']}/>
          <FeatureCard feature={villaDetails.totalLivingRooms} description="Tv and Streaming Services (Netflix) available" imgs={['living-room.png', 'tv.png']}/>
          <FeatureCard feature={villaDetails.totalKitchens} description="Primary Kitchen and Dirty Kitchen" imgs={['kitchen.png']}/>
        </div>
      </div>
    </section>
  )
}

export default VillaAbout 
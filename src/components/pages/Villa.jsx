import VillaHero from "./villa_page/VillaHero"
import VillaAbout from "./villa_page/VillaAbout"

const Villa = () => {
  return (
    <main className="landing-page flex flex-col gap-16">
      <VillaHero />
      <VillaAbout />
    </main>
  )
}

export default Villa
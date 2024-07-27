import HeaderTitle from "../ui/HeaderTitle"
import AboutBox from "../ui/AboutBox"

export default function AboutSection() {
  const aboutData = [
    {
      title: 'DINING',
      description: 'Enjoy a continental breakfast of pastries, cereal, and a variety of hot drinks. The lounge is available for guests to relax with a book, tea and coffee and a variety of snacks.',
      image: 'about-1'
    },
    {
      title: 'AMENITIES',
      description: 'We offer a variety of amenities to make your stay with us as comfortable as possible. Billiard is available with the option of pay-per-hours / day. We provide complimentary high-speed internet access.',
      image: 'about-2'
    },
    {
      title: '100% SATISFACTION GUARANTEED',
      description: 'Whether this is your first visit, or you have been a guest many times, we want your experience to be excellent. Our staff is always available to help with any questions or concerns you may have.',
      image: 'about-3'
    },
  ]
  
  return (

    <section className="about pt-20" id="about">
      <div className="container mx-auto text-center text-black flex flex-col gap-10 items-center">
        <HeaderTitle title="About Us"></HeaderTitle>

        {aboutData.map((about, id) => (
          <AboutBox key={id} data={about}/>
        ))}
      </div>
    </section>
  )
}
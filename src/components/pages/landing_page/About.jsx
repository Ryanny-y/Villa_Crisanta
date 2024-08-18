import SectionLayout from '../../layout/SectionLayout'
import HeaderTitle from '../../common/HeaderTitle';
import AboutBox from '../../ui/landing_page/AboutBox';

const About = () => {
  const aboutData = [
    {
      title: 'DINING',
      img: 'about-1.jpg',
      description: 'Enjoy a continental breakfast of pastries, cereal, and a variety of hot drinks. The lounge is available for guests to relax with a book, tea and coffee and a variety of snacks.',
      aos: 'slide-right'
    },
    {
      title: 'AMENITIES',
      img: 'about-2.jpg',
      description: 'We offer a variety of amenities to make your stay with us as comfortable as possible. Billiard is available with the option of pay-per-hours / day. We provide complimentary high-speed internet access.',
      aos: 'slide-left'
    },
    {
      title: '100% Satisfaction Guaranteed',
      img: 'about-3.jpg',
      description: 'Whether this is your first visit, or you have been a guest many times, we want your experience to be excellent. Our staff is always available to help with any questions or concerns you may have.',
      aos: 'slide-right'
    }
  ]

  return (
    <SectionLayout sectionId='about-us'>
      <HeaderTitle title='About Us'/>

      {aboutData.map(about => (
        <AboutBox key={about.title} title={about.title} img={about.img} description={about.description} aos={about.aos}/>
      ))}
    </SectionLayout>
  )
}

export default About

const SectionLayout = ({ sectionId, children }) => {
  return (
    <section id={sectionId} className={`${sectionId === 'photo-gallery' && 'mb-20 md:mb-16 lg:mb-12'} pt-20 ${(sectionId === 'about-us' || sectionId === 'accommodation-rates') && 'overflow-hidden'}`} data-aos="fade-up" data-aos-duration="700">
      <div className="container flex flex-col gap-10">
        {children}
      </div>
    </section>
  )
}

export default SectionLayout
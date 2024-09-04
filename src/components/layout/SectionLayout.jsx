
const SectionLayout = ({ sectionId, children }) => {
  return (
    <section 
      id={sectionId} 
      className={`
        ${sectionId === 'photo-gallery' && 'mb-24 md:mb-16 lg:mb-12'} 
        ${(sectionId === 'about-us' || sectionId === 'accommodation-rates') && 'overflow-hidden'}
        ${sectionId === 'contact' && 'text-white bg-dark mt-14 py-14'}
        pt-20`
      } 
      data-aos="fade-up" data-aos-duration="700">
      <div className="container flex flex-col gap-10">
        {children}
      </div>
    </section>
  )
}

export default SectionLayout

const SectionLayout = ({ sectionId, children }) => {
  return (
    <section id={sectionId} className={`${sectionId === 'photo-gallery' && 'mb-20 md:mb-16 lg:mb-12'}`}>
      <div className="container flex flex-col gap-10">
        {children}
      </div>
    </section>
  )
}

export default SectionLayout
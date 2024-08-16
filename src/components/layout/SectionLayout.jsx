
const SectionLayout = ({ sectionId, children }) => {
  return (
    <section id={sectionId}>
      <div className="container flex flex-col gap-10">
        {children}
      </div>
    </section>
  )
}

export default SectionLayout
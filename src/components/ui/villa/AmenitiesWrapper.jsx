
const AmenitiesWrapper = ({ amenity, icon }) => {
  return (
    <div className="flex items-center gap-5 basis-32 md:basis-52">
      <img src={`icons/${icon}`} alt="Amenity Icon" className="h-10 w-10"/>
      <p>{amenity}</p>
    </div>
  )
}

export default AmenitiesWrapper
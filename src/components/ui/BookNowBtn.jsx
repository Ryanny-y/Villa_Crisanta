import '../../assets/css/animations.css'

export default function BookNowBtn() {
  const bookClass = {
    border: "none",
    // animation: "scalebtn 2s infinite",
    outline: "1px solid #ca8a04 ",
    outlineOffset: "5px"
  };
  

  return (
    <button className="scale fixed bg-gold rounded-md text-white bg-yellow-600 bottom-16 right-20 z-30 text-sm font-semibold px-5 py-3 hover:bg-black hover:text-white duration-200" style={bookClass}>Book Now</button>

  )
}
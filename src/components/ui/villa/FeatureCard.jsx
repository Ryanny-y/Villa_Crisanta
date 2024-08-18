
const FeatureCard = ({ feature, description, imgs }) => {
  return (
    <div className="flex flex-col basis-52 max-w-60 sm:max-w-full gap-1 p-5 items-center text-center border rounded-sm border-black flex-1">
      <span className="flex icon-container gap-5 mb-3">
        {imgs.map(img => 
          <img key={img} src={`icons/${img}`} alt="Icon Image" className="w-12 h-12 md:h-20 md:w-20"/>
        )}
      </span>
      <p className="font-semibold text-2xl">{`${feature}`}</p>
      <p className="text-sm font-medium">{description}</p>
    </div>
  )
}

export default FeatureCard
const VillaHeaderTitle = ({ title, fs = '' }) => {
  return (
    <h1 className={`text-center font-semibold text-4xl ${fs && `font-${fs} text-7xl`}`}>{title}</h1>
  )
}

export default VillaHeaderTitle
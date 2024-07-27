export default function TeamCard({name, img, position}) {

  const imgPath = `./src/assets/images/team/${img}.webp`;

  return (
    <div className="shadow-xl py-4 px-5 flex flex-col items-center gap-1 h-96 min-w-64 w-64 flex-grow" style={{background: "#fff"}}>
      <img src={imgPath} alt="Team Image" className="h-72 w-60"/>

      <p className="font-semibold text-lg">{name}</p>
      <p className="font-semibold text-sm">{position}</p>
    </div>
  )
}
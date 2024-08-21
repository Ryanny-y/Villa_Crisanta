
const TeamCard = ({ team }) => {
  return (
    <div className="py-7 px-5 flex flex-col justify-between md:justify-start gap-3 
      basis-48 sm:basis-52 md:basis-72 
      max-w-52 md:max-w-72 
      flex-grow rounded-md text-center shadow-xl">
      <img src={`${team.image ? `images/team/${team.image}` : 'images/team/user profile.webp'}`} alt="Member Image" className="h-44 md:h-52 lg:h-60 w-full md:w-11/12 mx-auto rounded-md"/>
      
      <p className="font-semibold  md:text-lg">{team.name}</p>
      <p className="font-medium text-sm md:text-base">{team.position}</p>
    </div>
  )
}

export default TeamCard
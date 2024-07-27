import HeaderTitle from "../ui/HeaderTitle"
import TeamCard from "../ui/TeamCard"

export default function TeamSection() {

  const teamData = [
    {
      id: "1",
      name: "John Cedrick Abad",
      img: "user profile",
      position: "Co-owner, President & CEO"
    },
    {
      id: "2",
      name: "Pablo Labrador",
      img: "pab",
      position: "Chief House Keeper"
    },
    {
      id: "3",
      name: "Jennelyn Dumalaog",
      img: "jen",
      position: "Housekeeping in Charge"
    },
    {
      id: "4",
      name: "Jema Juntilla",
      img: "user profile",
      position: "Resort Administrator"
    },
    {
      id: "5",
      name: "Crisanda Cabrera",
      img: "cris",
      position: "Certified Agent"
    },
    {
      id: "6",
      name: "Ryanny Romero",
      img: "user profile",
      position: "Full Stack Developer"
    },
    {
      id: "7",
      name: "Gabriel Juntilla",
      img: "user profile",
      position: "Project Manager"
    },
    {
      id: "8",
      name: "Arianne Tupaen",
      img: "user profile",
      position: "UI/UX Designer"
    },
  ]

  return ( 
    <section className="team pt-20">
      <div className="container mx-auto text-center text-black flex flex-col gap-10 items-center">
        <HeaderTitle title="Our Team"/>

        <div className="flex items-center gap-10 justify-center w-10/12 md:w-full flex-wrap">
          {teamData.map((team) => (
            <TeamCard key={team.id} name={team.name} img={team.img} position={team.position}/>
          ))}
        </div>
      </div>
    </section>
  )
}
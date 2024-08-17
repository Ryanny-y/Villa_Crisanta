import SectionLayout from "../../layout/SectionLayout";
import HeaderTitle from "../../common/HeaderTitle";
import TeamCard from "../../ui/landing_page/TeamCard";

const Team = () => {
  const teamMembers = [
    {
      name: 'John Cedrick Abad',
      position: 'Co-owner, President & CEO'
    },
    {
      name: 'Pablo Labrador',
      position: 'Chief House Keeper',
      image: 'pab.webp'
    },
    {
      name: 'Jennelyn Dumalaog',
      position: 'Housekeeping in Charge',
      image: 'jen.webp'
    },
    {
      name: 'Jema Juntilla',
      position: 'Resort Administrator'
    },
    {
      name: 'Crisanda Cabrera',
      position: 'Certified Agent',
      image: 'cris.webp'
    },
    {
      name: 'Ryanny Romero',
      position: 'Full Stack Developer'
    },
    {
      name: 'Gabriel Juntilla',
      position: 'Project Manager'
    },
    {
      name: 'Arianne Tupaen',
      position: 'UI/UX Designer'
    },
  ]

  return (
    <SectionLayout sectionId='team'>
      <HeaderTitle title="Our Team"/>  
    
      <div className="flex flex-wrap gap-10 justify-center w-10/12 mx-auto">
        {teamMembers.map(member => (
          <TeamCard key={member.name} team={member}/>
        ))}
      </div>
    </SectionLayout>
  )
}

export default Team
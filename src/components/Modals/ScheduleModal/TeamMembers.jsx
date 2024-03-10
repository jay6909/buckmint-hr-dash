import React from 'react'
import TeamMemberCard from '../TeamMemberCard'

function TeamMembers({teamMembers}) {
  // console.log(teamMembers)
  return (
    <div>
      {teamMembers.map((member, index)=>{
        (
          // console.log(member);
          
          <TeamMemberCard key={index} data={member}/>

        )
        
      })}
    </div>
  )
}

export default TeamMembers
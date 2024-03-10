import React,{useState} from 'react'
import { useMember } from '../../../context/MemberDataContext'
import TeamMemberCard from '../TeamMemberCard'
import DropDownAddMember from './DropDownAddMember';

function TeamMembers() {
  const [memberData, setMemberData]= useMember();
const [updatedMembers, setUpdatedMembers] = useState([]);
const [addedMembers, setAddedMembers] = useState([])

  const handleRemoveMember=(rmMember)=>{
    let updatedMember=addedMembers.filter((memberD)=>rmMember!==memberD)
      setAddedMembers([...updatedMember]);
  }
  const handleAddMember =   (member) => {
    // console.log(updatedMembers)
      
      setAddedMembers([...addedMembers, member])

  };

  return (
    <div className='d-flex w-100 flex-column p-2'>
      {addedMembers.map((member, index)=>
        
      <TeamMemberCard handleRemoveMember={handleRemoveMember} key={index} data={member}/>

        
      )}
      <div>
        <DropDownAddMember handleAddMember ={handleAddMember} data={memberData}/>
      </div>

    </div>
  )
}

export default TeamMembers
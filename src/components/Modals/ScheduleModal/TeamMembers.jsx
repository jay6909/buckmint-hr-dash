import React, { useState } from "react";
import { useMember } from "../../../context/MemberDataContext";
import TeamMemberCard from "../TeamMemberCard";
import DropDownAddMember from "./DropDownAddMember";
import AddedData, { useAdd } from "../../../context/AddedMemberContext";
import DropDown, { useDropDown } from "../../../context/DropDownMemberContext";

function TeamMembers() {
  const [addedDropDown, setAddedDropDown] = useDropDown();

  const [memberData, setMemberData] = useMember();
  const [addedMemberData, setAddedMemberData] = useAdd();

  const handleRemoveMember = (member) => {
    let updatedMember = addedMemberData.filter((memberD) => member !== memberD);
    setAddedMemberData(updatedMember);

    setAddedDropDown([...addedDropDown, member]);
  };
  const handleAddMember = ({ member, setDropDown, dropDown }) => {
    setAddedMemberData([...addedMemberData, member]);

    let removedMember = addedDropDown.filter((memberD) => member !== memberD);
    console.log(removedMember);
    setAddedDropDown(removedMember);
  };

  return (
    <div className="d-flex w-100 flex-column p-2">
      {addedMemberData.map((member, index) => (
        <TeamMemberCard
          handleRemoveMember={handleRemoveMember}
          key={index}
          data={member}
        />
      ))}
      <div>
        <DropDownAddMember
          addedMemberData={addedMemberData}
          handleAddMember={handleAddMember}
          data={memberData}
        />
      </div>
    </div>
  );
}

export default TeamMembers;

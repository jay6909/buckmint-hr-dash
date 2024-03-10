import React from "react";

function TeamMemberCard({ data }) {
    console.log(data)
  return (
    <div className="d-flex flex-row justify-content-around">
      <div>
        <div className="d-flex flex-row gap-1">
          <div>
            <img src={data.profilePic} alt="added member member profile pic" />
          </div>
          <div className="d-flex flex-column gap-1">
            <div>{data.name}</div>
            <div>{data.email}</div>
          </div>
        </div>
      </div>
      <div>
        <button className="roboto-semibold" style={{color:'#B42318', fontSize:'16px'}}>Remove</button>
      </div>
    </div>
  );
}

export default TeamMemberCard;

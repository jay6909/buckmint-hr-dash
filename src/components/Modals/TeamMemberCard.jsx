import React,{useState} from "react";

function TeamMemberCard({ data, handleRemoveMember }) {
    
    return (
    <div className="d-flex flex-row justify-content-between">
      <div>
        <div className="d-flex flex-row gap-1">
          <div className="d-flex justify-content-center align-items-center " style={{borderRadius:'50%', width:'3rem', height:'3rem'}}>
            <img src={data.profilePic} alt="member" />
          </div>
          <div className="d-flex flex-column gap-1 text-start" style={{lineHeight:'1.2rem'}}>
            <div className="poppins-semibold">{data.name}</div>
            <div className="roboto-regular">{data.email}</div>
          </div>
        </div>
      </div>
      <div>
        <button className="roboto-bold" style={{color:'#B42318', fontSize:'16px', background:'white', border:'none'}} onClick={()=>{
            console.log(data.email);
            handleRemoveMember(data)
        }}>Remove</button>
      </div>
    </div>
  );
}

export default TeamMemberCard;

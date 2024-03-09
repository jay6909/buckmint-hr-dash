import React,{useState} from "react";
import data from "../../data";

import AnnouncementScheduleCard from "./AnnouncementScheduleCard";
function Accouncements() {
  const [announcements, setAnnouncements] = useState(data.announcements)

  console.log(announcements)
  return (
    <div className="" style={{padding:"20px",}}>
      <div  style={{border:'2px solid #E0E0E0', padding:'20px',  borderRadius:'15px'}}>
      <div>
        <h3>Accouncement</h3>
      </div>
      <div style={{padding:"15px"}} className="d-flex flex-column gap-3">
        {announcements.map((announcment, index) => (
         <AnnouncementScheduleCard key={index} data={announcment}/>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Accouncements;

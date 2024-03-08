import React,{useState} from "react";
import data from "../../data";
import PinIcon  from "../../assets/pin-icon.svg?component";
import ThreeDotsMore  from "../../assets/three-dots-more.svg?component";
function Accouncements() {
  const [announcements, setAnnouncements] = useState(data.announcements)

  console.log(announcements)
  return (
    <div className="" style={{border:'2px solid #E0E0E0', padding:"25px", borderRadius:'15px'}}>
      <div>
        <h3>Accouncement</h3>
      </div>
      <div style={{padding:"15px"}} className="d-flex flex-column gap-3">
        {announcements.map((announcment, index) => (
          <div  key={index} className="d-flex flex-row justify-content-between" style={{border:'1px solid #E0E0E0', borderRadius:'7px', padding:"5px"}}>
            <div className="d-flex flex-column gap-1">
              <div>{announcment.title}</div>
              <div>{announcment.timeElapsed}</div>
            </div>
            <div className="d-flex flex-row justify-content-between " style={{width:'65px', margin:'5px'}}>
            <div className="d-flex align-items-center justify-content-center" style={{cursor:'pointer'}}><PinIcon width={30} height={30}/></div>
            <div className="d-flex align-items-center align-content-center justify-content-center" style={{cursor:'pointer'}}><ThreeDotsMore width={30} height={30}/></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accouncements;

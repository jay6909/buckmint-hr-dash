import React, {useState} from 'react'
import ThreeDotsMore  from "../../assets/three-dots-more.svg?component";
import data from "../../data";
import AnnouncementScheduleCard from './AnnouncementScheduleCard';

const UpcomingSchedule = () => {
    const [upcomingSchedule, setUpcomingSchedule] = useState(data.upcomingSchedule)

  return (
    <div className="text-start" style={{padding:"20px",}}>
    <div  style={{border:'2px solid #E0E0E0', padding:'20px',  borderRadius:'15px'}}>
    <div>
      <h3>Upcoming Schedule</h3>
    </div>
    <div>Priority</div>
    <div style={{padding:"15px"}} className="d-flex flex-column gap-3 ">
      {upcomingSchedule.priority.map((schedule, index) => (
       <AnnouncementScheduleCard key={index} data={schedule} ShowPinIcon={false} />
      ))}
    </div>
    <div>Other</div>
    <div style={{padding:"15px"}} className="d-flex flex-column gap-3">
      {upcomingSchedule.other.map((schedule, index) => (
       <AnnouncementScheduleCard key={index} data={schedule} ShowPinIcon={false} />
      ))}
    </div>
    </div>
  </div>
  )
}

export default UpcomingSchedule
import React from "react";
import PinIcon from "../../assets/pin-icon.svg?component";
import ThreeDotsMore from "../../assets/three-dots-more.svg?component";
function AnnouncementScheduleCard({
  data,
  ShowPinIcon = true,
  ShowThreeDotsMore = true,
}) {
  return (
    <div
      className="d-flex flex-row justify-content-between"
      style={{
        border: "1px solid #E0E0E0",
        borderRadius: "7px",
        padding: "5px",
        background:'rgb(224 224 224/50%)'
      }}
    >
      <div className="d-flex flex-column gap-1 text-start">
        <div className="poppins-regular" style={{fontSize:'16px'}}>{data.title}</div>
        <div className="roboto-regular" style={{fontSize:'12px', color:'rgba(104, 104, 104, 1)'}}>{data.timeElapsed}</div>
      </div>
      <div
        className="d-flex flex-row justify-content-between "
        style={{ margin: "5px" }}
      >
        {ShowPinIcon ? (
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ cursor: "pointer" }}
          >
            <i><PinIcon width={30} height={30} /></i>
          </div>
        ) : (
          <></>
        )}
        {ShowThreeDotsMore ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ cursor: "pointer", width:'30px', height:'30px' }}
          >
            <i><ThreeDotsMore width={30} height={30} /></i>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default AnnouncementScheduleCard;

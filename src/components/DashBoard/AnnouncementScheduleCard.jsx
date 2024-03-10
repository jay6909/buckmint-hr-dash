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
            <PinIcon width={30} height={30} />
          </div>
        ) : (
          <></>
        )}
        {ShowThreeDotsMore ? (
          <div
            className="d-flex align-items-center align-content-center justify-content-center"
            style={{ cursor: "pointer" }}
          >
            <ThreeDotsMore width={30} height={30} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default AnnouncementScheduleCard;

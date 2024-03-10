import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";

import { useModal } from "../../../context/ModalContext";
import ResponsiveTimePickers from "../ResponsiveTimePicker";
import ResponsiveDatePickers from "../ResponsiveDatePicker";
import XCloseButton from "../../../assets/x-close.svg?component";
import TeamMembers from "./TeamMembers";
import data from "../../../data";
import { MobileDatePicker } from "@mui/x-date-pickers";
import { useAdd } from "../../../context/AddedMemberContext";
function ScheduleModal() {
  const { isOpen, setModalState } = useModal();
  const [addedMemberData, setAddedMemberData] = useAdd();

  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [timeOpen, setTimeOpen] = useState(true);
  const [dateOpen, setDateOpen] = useState(false);
  const [teamMemberOpen, setTeamMemberOpen] = useState(false);

  const handleTimeOpen = () => {
    setTimeOpen(true);
    setDateOpen(false);
    setTeamMemberOpen(false);
  };
  const handleDateOpen = () => {
    setDateOpen(true);
    setTeamMemberOpen(false);
    setTimeOpen(false);
  };
  const handleTeamOpen = () => {
    setTeamMemberOpen(true);
    setTimeOpen(false);
    setDateOpen(false);
  };
  const handleModalOpen = (e) => {
    setModalState(isOpen);
  };
  const handleModalClose = () => {
    setModalState(false);
  };



  const handleSubmit = () => {
    if(!date) {
      window.alert("no date seleted");
      return; 
    }
    if(!time) {
      window.alert("no time seleted");
      return; 
    }
    if (addedMemberData.length < 1) {
      window.alert("no members chosen");
      return;
    } else {
      const data = { time, date, addedMemberData };
      console.log(data);
      setModalState(false);
      window.alert("successfully set meeting")
    }
  };

  if (isOpen) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "#00000045",
          backdropFilter: "blur(1px)",
        }}
      >
        <div
          className="d-flex justify-content-center align-items-center bg-white border-1 border-black p-2"
          style={{ width: "40%", height: "75%", borderRadius: "8px" }}
        >
          <div className="d-flex flex-column h-100 w-100">
            <div style={{ cursor: "pointer" }} onClick={handleModalClose}>
              <XCloseButton />
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-around h-100 w-100">
              <div
                className="p-2 m-2 text-start d-flex justify-content-center align-items-center flex-column"
                style={{ width: "40%" }}
              >
                <div
                  className="d-flex align-items-center  w-100 p-3"
                  onClick={handleTimeOpen}
                  style={{
                    cursor: "pointer",
                    height: "60px",
                    color: timeOpen
                      ? "var(--css-primary)"
                      : "rgba(52, 64, 84, 1)",
                  }}
                >
                  <div>Time</div>
                </div>
                <div
                  className="d-flex align-items-center  w-100 p-3"
                  onClick={handleDateOpen}
                  style={{
                    cursor: "pointer",
                    height: "60px",
                    color: dateOpen
                      ? "var(--css-primary)"
                      : "rgba(52, 64, 84, 1)",
                  }}
                >
                  <div>Date</div>
                </div>
                <div
                  className="d-flex align-items-center w-100 p-3 "
                  onClick={handleTeamOpen}
                  style={{
                    cursor: "pointer",
                    height: "60px",
                    color: teamMemberOpen
                      ? "var(--css-primary)"
                      : "rgba(52, 64, 84, 1)",
                  }}
                >
                  <div>Add team Member</div>
                </div>
              </div>
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ width: "60%" }}
              >
                <div>
                  {timeOpen ? (
                    <div className="d-flex flex-column justify-content-around align-items-start gap-4 w-100">
                      <div className="text-start w-100">
                        <div
                          className="poppins-semibold"
                          style={{ fontSize: "18px" }}
                        >
                          Select a time for meeting
                        </div>
                        <div
                          className="roboto-regular"
                          style={{ color: "#475467" }}
                        >
                          The following time will be set for the meeting:
                        </div>
                      </div>
                      <ResponsiveTimePickers time={time} setTime={setTime}
                      />
                      <div>
                        <button
                          className="poppins-medium"
                          style={{
                            border: "none",
                            borderRadius: "5px",
                            background: "var(--css-primary)",
                            width: "150px",
                            height: "40px",
                          }}
                          onClick={handleDateOpen}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                  {dateOpen ? (
                    <div className="d-flex flex-column justify-content-around align-items-start gap-4 w-100">
                      <div className="text-start w-100">
                        <div
                          className="poppins-semibold"
                          style={{ fontSize: "18px" }}
                        >
                          Select a date for meeting
                        </div>
                        <div
                          className="roboto-regular"
                          style={{ color: "#475467" }}
                        >
                          The following date will be set for the meeting:
                        </div>
                      </div>
                      <div className="w-100">
                        <ResponsiveDatePickers date={date} setDate={setDate}                        />
                      </div>
                      <div>
                        <button
                          className="poppins-medium"
                          style={{
                            border: "none",
                            borderRadius: "5px",
                            background: "var(--css-primary)",
                            width: "150px",
                            height: "40px",
                          }}
                          onClick={handleTeamOpen}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                  {teamMemberOpen ? (
                    <div className="d-flex flex-column justify-content-around align-items-start gap-4 w-100">
                      <div className="text-start w-100">
                        <div
                          className="poppins-semibold"
                          style={{ fontSize: "18px" }}
                        >
                          Add team member
                        </div>
                        <div
                          className="roboto-regular"
                          style={{ color: "#475467" }}
                        >
                          The following users have access to this meeting:
                        </div>
                      </div>
                      <TeamMembers teamMembers={data.teamMembers} />
                      <div>
                        <button
                          className="poppins-medium"
                          style={{
                            border: "none",
                            borderRadius: "5px",
                            background: "var(--css-primary)",
                            width: "150px",
                            height: "40px",
                          }}
                          onClick={handleSubmit}
                        >
                          Confirm
                        </button>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default ScheduleModal;

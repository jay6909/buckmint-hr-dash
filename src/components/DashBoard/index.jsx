import React from "react";
import Accouncements from "./Accouncements";
import EmployeeStats from "./EmployeeStats";
import Schedule from "./Schedule";
import "./Dashboard.css";

function DashBoard() {
  return (
    <div style={{}}>
      <div className="content d-flex flex-column flex-lg-row justify-content-center align-items-center w-100">
        <div
          className="text-sm-start"
          style={{ padding: "15px", maxWidth:'60%',  marginTop: "80px" }}
        >
          <h2>Dashboard</h2>
          <EmployeeStats />
          <Accouncements />
        </div>
        <div className="d-flex" style={{maxWidth:'40%'}}>
          <Schedule/>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;

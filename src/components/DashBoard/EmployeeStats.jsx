import React, { useState } from "react";
import data from "../../data";
import GrowthLineVec from "../../assets/HR Dashboard/growth-line-vec.svg?component";
import UpArrow from "../../assets/HR Dashboard/uparrow.svg?component";

function EmployeeStats() {
  const [employeeStats, setEmployeeStats] = useState(data.employeeStats);
  return (
    <div
      className="d-flex flex-column gap-3"
      style={{
        minWidth: "300px", padding:'20px'
      }}
    >
      <div className="employee-stats-container d-flex flex-column flex-md-row justify-content-md-between gap-sm-2">
        <div
          className="employee-stat-card d-flex justify-content-center align-center flex-column gap-1"
          style={{
            background: "rgba(255 81 81 /15%)",
            padding: "12px",
            borderRadius: "12px",
            cursor: "pointer",
          }}
        >
          <div className="fw-medium " style={{ fontSize: "18px" }}>
            {" "}
            Available Position
          </div>
          <div style={{ fontSize: "34px", fontWeight: "500" }}>
            {employeeStats.positionsAvail.count}
          </div>
          <div style={{ color: "var(--css-primary)" }}>
            {employeeStats.positionsAvail.urgentNeeded} Urgently needed
          </div>
        </div>
        <div
          className="employee-stat-card d-flex justify-content-center align-center flex-column gap-1"
          style={{
            background: "rgb(55 134 241 / 15%)",

            padding: "12px",
            borderRadius: "12px",
            cursor: "pointer",
          }}
        >
          <div className="fw-medium " style={{ fontSize: "18px" }}>
            {" "}
            Job Open
          </div>
          <div style={{ fontSize: "34px", fontWeight: "500" }}>
            {employeeStats.jobOpen.count}
          </div>
          <div style={{ color: "var(--css-secondary)" }}>
            {employeeStats.jobOpen.activeHiring} Active hiring
          </div>
        </div>
        <div
          className="employee-stat-card d-flex justify-content-center align-center flex-column gap-1"
          style={{
            background: "rgb(238 97 207 / 15%)",

            padding: "12px",
            borderRadius: "12px",
            cursor: "pointer",
          }}
        >
          <div className="fw-medium " style={{ fontSize: "18px" }}>
            {" "}
            New Employees
          </div>
          <div style={{ fontSize: "34px", fontWeight: "500" }}>
            {employeeStats.newEmployees.count}
          </div>
          <div style={{ color: "var(--css-light-pink)" }}>
            {employeeStats.newEmployees.department} Department
          </div>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row gap-2 justify-content-between">
        <div className="employee-graph-card d-flex flex-row" style={{}}>
          <div className="d-flex flex-column" style={{width:'50%', padding:'10px'}}>
            <div className="fw-medium " style={{ fontSize: "18px" }}>
              Total Employees
            </div>
            <div style={{ fontSize: "48px", fontWeight: "500" }}>
              {employeeStats.totalEmployees.count}
            </div>

            <div style={{ fontSize: "12px", color: "rgba(104, 104, 104, 1)" }}>
              <div>{employeeStats.totalEmployees.men} Men</div>
              <div>{employeeStats.totalEmployees.women} Women</div>
            </div>
          </div>
          <div className="chart-image-container " style={{width:'50%'}}>
           <div className="d-flex flex-column justify-content-center align-items-center">
           <div
              className="rubik-growth-percentage"
              style={{ color: "var(--css-primary)" }}
            >
              {employeeStats.totalEmployees.growth}
            </div>
            <div>
              <UpArrow />
            </div>
            <div className="chart-line-container d-flex" >
              <GrowthLineVec width={115} height={42} />
            </div>
           </div>
            <div className="roboto-regular" style={{ background: "#FFEFE7" }}>
              {employeeStats.totalEmployees.growth} Past Month
            </div>
          </div>
        </div>
        <div className="employee-graph-card" style={{}}>
          {" "}
          2<div>text</div>
          <div>graph</div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeStats;

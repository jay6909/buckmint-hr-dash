import React, { useState } from "react";
import data from "../../data";

function EmployeeStats() {
  const [employeeStats, setEmployeeStats] = useState(data.employeeStats);
  return (
    <div
      className="d-flex flex-column gap-3"
      style={{
            minWidth:"300px",
              
      }}
    >
      <div className="employee-stats-container d-flex flex-column flex-md-row justify-content-md-between gap-sm-2">
        <div
          className="employee-stat-card d-flex justify-content-center align-center flex-column gap-1"
          style={{
            background: "rgba(255 81 81 /15%)",
            padding: "12px",
            borderRadius: "12px",
            cursor:'pointer',
          }}
        >
          <div style={{ fontSize: "18px" }}> Available Position</div>
          <div style={{ fontSize: "34px" }}>
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
            cursor:'pointer',
          }}
        >
          <div style={{ fontSize: "18px" }}> Job Open</div>
          <div style={{ fontSize: "34px" }}>
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
            cursor:'pointer',
          }}
        >
          <div style={{ fontSize: "18px" }}> New Employees</div>
          <div style={{ fontSize: "34px" }}>
            {employeeStats.newEmployees.count}
          </div>
          <div style={{ color: "var(--css-light-pink)" }}>
            {employeeStats.newEmployees.department} Department
          </div>
        </div>
      
      </div>
      <div className="d-flex flex-column flex-md-row gap-2 justify-content-between">
        
        <div className="employee-graph-card" style={{           
     
          }}>1
            <div>text</div>
            <div>graph</div>
        </div>
        <div className="employee-graph-card" style={{
           
           
          }}> 2
        <div>text</div>
            <div>graph</div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeStats;

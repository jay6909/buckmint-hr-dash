import React, { useState } from "react";
import data from "../../data";
import GrowthLineVec from "../../assets/HR Dashboard/growth-line-vec.svg?component";
import UpArrow from "../../assets/HR Dashboard/uparrow.svg?component";
import EmployeeStatsCard from "./EmployeeStatsCard";

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
       <EmployeeStatsCard textColor={'var(--css-primary)'} bgColor={'#FFEFE7'} data={{mainText:'Available Jobs', secondaryText:`${employeeStats.positionsAvail.urgentNeeded} Urgently Needed`, dataPrimary:employeeStats.positionsAvail.count}}/>
       <EmployeeStatsCard textColor={'var(--css-seconday)'} bgColor={'#E8F0FB'} data={{mainText:'Job Open', secondaryText:`${employeeStats.jobOpen.count} Active Hiring`, dataPrimary:employeeStats.positionsAvail.count}}/>
       <EmployeeStatsCard textColor={'var(--css-light-pink)'} bgColor={'#FDEBF9'} data={{mainText:'New Employees', secondaryText:`${employeeStats.newEmployees.count} Department`, dataPrimary:employeeStats.newEmployees.count}}/>
        
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
              <GrowthLineVec className="growth-vector-line backdrop-primary" width={115} height={42} />
            </div>
           </div>
            <div className="roboto-regular" style={{ background: "#FFEFE7" }}>
              {employeeStats.totalEmployees.growth} Past Month
            </div>
          </div>
        </div>
        <div className="employee-graph-card d-flex flex-row" style={{}}>
        <div className="d-flex flex-column" style={{width:'50%', padding:'10px'}}>
            <div className="fw-medium " style={{ fontSize: "18px" }}>
              Talent Request
            </div>
            <div style={{ fontSize: "48px", fontWeight: "500" }}>
              {employeeStats.talentRequest.count}
            </div>

            <div style={{ fontSize: "12px", color: "rgba(104, 104, 104, 1)" }}>
              <div>{employeeStats.talentRequest.men} Men</div>
              <div>{employeeStats.talentRequest.women} Women</div>
            </div>
          </div>
          <div className="chart-image-container " style={{width:'50%'}}>
           <div className="d-flex flex-column justify-content-center align-items-center">
           <div
              className="rubik-growth-percentage"
              style={{ color: "var(--css-primary)" }}
            >
              {employeeStats.talentRequest.growth}
            </div>
            <div>
              <UpArrow />
            </div>
            <div className="chart-line-container d-flex" >
              <GrowthLineVec className="growth-vector-line backdrop-primary" width={115} height={42} />
            </div>
           </div>
            <div className="roboto-regular" style={{ background: "#FFEFE7" }}>
              {employeeStats.talentRequest.growth} Past Month
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeStats;

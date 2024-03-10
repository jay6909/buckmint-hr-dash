import React from 'react'

function EmployeeStatsCard({data,bgColor, textColor}) {
  return (
    <div
          className="employee-stat-card d-flex justify-content-center align-center flex-column gap-1"
          style={{
            background: bgColor,
            padding: "12px",
            borderRadius: "12px",
            cursor: "pointer",
          }}
        >
          <div className="fw-medium " style={{ fontSize: "18px" }}>
            {data.mainText}
          </div>
          <div style={{ fontSize: "34px", fontWeight: "500" }}>
            {data.dataPrimary}
          </div>
          <div style={{ color: textColor }}>
            {data.secondaryText}
          </div>
        </div>
  )
}

export default EmployeeStatsCard
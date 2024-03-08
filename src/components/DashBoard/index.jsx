import React from 'react'
import Accouncements from './Accouncements'
import EmployeeStats from './EmployeeStats'
import Schedule from './Schedule'
import './Dashboard.css'

function DashBoard() {
  return (
    <div style={{}} >
        
        <div className='d-flex flex-column flex-lg-row justify-content-center align-items-center'>
        <div className="text-sm-start" style={{padding:'15px'}}>
            <h2>Dashboard</h2>
            <EmployeeStats/>
            <Accouncements/>
    </div>
    <Schedule className='d-flex '/>
        </div>
   
    </div>
  )
}

export default DashBoard
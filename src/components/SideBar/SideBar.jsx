import React from "react";
import DashIcon from "../../assets/HR Dashboard/ic_dashboard.svg?component";
import RecruitmentIcon from "../../assets/HR Dashboard/ic_recruitment.svg?component";
import EmployeeIcon from "../../assets/HR Dashboard/ic_employee.svg?component";
import CalendarIcon from "../../assets/HR Dashboard/ic_calendar.svg?component";
import DepartmentIcon from "../../assets/HR Dashboard/ic_department.svg?component";
import SupportIcon from "../../assets/HR Dashboard/ic_support.svg?component";
import SettingsIcon from "../../assets/HR Dashboard/ic_settings.svg?component";
import './SideBar.css'
function SideBarNav() {
  return (
      <nav className="d-flex p-2 flex-column navbar navbar-expand-md navbar-light bg-light h-100">
      <div>
      <h1>
          <a className="navbar-brand fs-1 fw-bold" href="#">
            WeHr
          </a>
        </h1>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

      </div>
        <div className="collapse navbar-collapse w-100 align-items-start" id="navbarSupportedContent">
          <div className="d-flex flex-column justify-content-start w-100">
            <div className="roboto-medium text-start p-2" style={{color:'#686868', fontSize:'14px'}}>MAIN MENU</div>
          <ul className="d-flex flex-column  navbar-nav w-100">
            <li className="nav-item active">
              <a className="d-flex flex-row gap-3 nav-link" href="#">
               <div><DashIcon/></div> <div style={{fontWeight:'16px', color:'var(--css-primary)'}}>Dashboard</div> <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="d-flex flex-row gap-3 nav-link" href="#">
               <div><RecruitmentIcon/></div> <div style={{fontWeight:'16px', color:'rgba(104, 104, 104, 1)'}}>Recruitment</div> <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item ">
              <a className="d-flex flex-row gap-3 nav-link" href="#">
               <div><CalendarIcon/></div> <div style={{fontWeight:'16px', color:'rgba(104, 104, 104, 1)'}}>Schedule</div> <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item ">
              <a className="d-flex flex-row gap-3 nav-link" href="#">
               <div><EmployeeIcon/></div> <div style={{fontWeight:'16px', color:'rgba(104, 104, 104, 1)'}}>Employee</div> <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item ">
              <a className="d-flex flex-row gap-3 nav-link" href="#">
               <div><DepartmentIcon/></div> <div style={{fontWeight:'16px', color:'rgba(104, 104, 104, 1)'}}>Department</div> <span className="sr-only">(current)</span>
              </a>
            </li>
           
           
          </ul>
          <div className="roboto-medium text-start p-2" style={{color:'#686868', fontSize:'14px'}}>OTHER</div>

          <ul className="d-flex flex-column navbar-nav  w-100">
           
            <li className="nav-item ">
              <a className="d-flex flex-row gap-3 nav-link" href="#">
               <div><SupportIcon/></div> <div style={{fontWeight:'16px', color:'rgba(104, 104, 104, 1)'}}>Support</div> <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item ">
              <a className="d-flex flex-row gap-3 nav-link" href="#">
               <div><SettingsIcon/></div> <div style={{fontWeight:'16px', color:'rgba(104, 104, 104, 1)'}}>Settings</div> <span className="sr-only">(current)</span>
              </a>
            </li>
           
          </ul>
          </div>
        </div>
      </nav>
  );
}

export default SideBarNav;

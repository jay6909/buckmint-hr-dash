import React from "react";
import DashIcon from "../../assets/HR Dashboard/ic_dashboard.svg?component";
import RecruitmentIcon from "../../assets/HR Dashboard/ic_recruitment.svg?component";
import EmployeeIcon from "../../assets/HR Dashboard/ic_employee.svg?component";
import CalendarIcon from "../../assets/HR Dashboard/ic_calendar.svg?component";
import DepartmentIcon from "../../assets/HR Dashboard/ic_department.svg?component";
import SupportIcon from "../../assets/HR Dashboard/ic_support.svg?component";
import SettingsIcon from "../../assets/HR Dashboard/ic_settings.svg?component";
import './SideBar.css'
function SideBar() {
  return (
    <div style={{ width: "25%", height: 'auto' }}>
      <nav class="d-flex p-2 flex-column navbar navbar-expand-md navbar-light bg-light h-100">
      <div>
      <h1>
          <a class="navbar-brand fs-1 fw-bold" href="#">
            WeHr
          </a>
        </h1>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

      </div>
        <div class="collapse navbar-collapse w-100 align-items-start" id="navbarSupportedContent">
          <div className="d-flex flex-column justify-content-start w-100">
            <div className="roboto-medium text-start p-2" style={{color:'#686868', fontSize:'14px'}}>MAIN MENU</div>
          <ul class="d-flex flex-column  navbar-nav w-100">
            <li class="nav-item active">
              <a class="d-flex flex-row gap-3 nav-link" href="#">
               <div><DashIcon/></div> <div style={{fontWeight:'16px', color:'var(--css-primary)'}}>Dashboard</div> <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="d-flex flex-row gap-3 nav-link" href="#">
               <div><RecruitmentIcon/></div> <div style={{fontWeight:'16px', color:'rgba(104, 104, 104, 1)'}}>Recruitment</div> <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item ">
              <a class="d-flex flex-row gap-3 nav-link" href="#">
               <div><CalendarIcon/></div> <div style={{fontWeight:'16px', color:'rgba(104, 104, 104, 1)'}}>Schedule</div> <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item ">
              <a class="d-flex flex-row gap-3 nav-link" href="#">
               <div><EmployeeIcon/></div> <div style={{fontWeight:'16px', color:'rgba(104, 104, 104, 1)'}}>Employee</div> <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item ">
              <a class="d-flex flex-row gap-3 nav-link" href="#">
               <div><DepartmentIcon/></div> <div style={{fontWeight:'16px', color:'rgba(104, 104, 104, 1)'}}>Department</div> <span class="sr-only">(current)</span>
              </a>
            </li>
           
           
          </ul>
          <div className="roboto-medium text-start p-2" style={{color:'#686868', fontSize:'14px'}}>OTHER</div>

          <ul class="d-flex flex-column navbar-nav  w-100">
           
            <li class="nav-item ">
              <a class="d-flex flex-row gap-3 nav-link" href="#">
               <div><SupportIcon/></div> <div style={{fontWeight:'16px', color:'rgba(104, 104, 104, 1)'}}>Support</div> <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item ">
              <a class="d-flex flex-row gap-3 nav-link" href="#">
               <div><SettingsIcon/></div> <div style={{fontWeight:'16px', color:'rgba(104, 104, 104, 1)'}}>Settings</div> <span class="sr-only">(current)</span>
              </a>
            </li>
           
          </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default SideBar;

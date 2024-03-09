import React from "react";
import DashIcon from "../../assets/HR Dashboard/ic_dashboard.svg?component";

function SideBar() {
  return (
    <div style={{ width: "25%" }}>
      <nav class="d-flex flex-column navbar navbar-expand-md navbar-light bg-light">
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

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="d-flex flex-column">
          <ul class="d-flex flex-column navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="d-flex flex-row gap-3 nav-link" href="#">
               <div><DashIcon/></div> <div style={{fontWeight:'16px', color:'var(--css-primary)'}}>Dashboard</div> <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="d-flex flex-row gap-3 nav-link" href="#">
               <div><DashIcon/></div> <div style={{fontWeight:'16px', color:'var(--css-primary)'}}>Recruitment</div> <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="d-flex flex-row gap-3 nav-link" href="#">
               <div><DashIcon/></div> <div style={{fontWeight:'16px', color:'var(--css-primary)'}}>Schedule</div> <span class="sr-only">(current)</span>
              </a>
            </li>
           
           
          </ul>
          <ul class="d-flex flex-column navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="d-flex flex-row gap-3 nav-link" href="#">
               <div><DashIcon/></div> <div style={{fontWeight:'16px', color:'var(--css-primary)'}}>Dashboard</div> <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="d-flex flex-row gap-3 nav-link" href="#">
               <div><DashIcon/></div> <div style={{fontWeight:'16px', color:'var(--css-primary)'}}>Recruitment</div> <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="d-flex flex-row gap-3 nav-link" href="#">
               <div><DashIcon/></div> <div style={{fontWeight:'16px', color:'var(--css-primary)'}}>Schedule</div> <span class="sr-only">(current)</span>
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

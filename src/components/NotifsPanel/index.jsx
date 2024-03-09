import React from "react";
import BellIcon from "../../assets/ic_round-notifications.svg?component";
import MessagesIcon from "../../assets/bi_chat-left-dots-fill.svg?component";
import ArrowDropDownIcon from "../../assets/arrowdown.svg?component";
import ProfilePic from "../../assets/unsplash_OH2S9XAcLhc.png?component";


import  './Notifs.css';

function index({notifications}) {

  return (
    <div id="notification-right-container" className="d-flex justify-content-center align-content-center align-items-center gap-4">
      <div className="d-flex gap-4">
        <div className="d-flex" style={{width:'25px', cursor:'pointer',heigh:'25px', position:'relative'}}>
            {notifications ?             <div style={{width:'10px', height:'10px',background:'red', borderRadius:'50%', border:'1px solid white', position:'absolute', left:'11px'}}></div>
:<></>}
          <BellIcon width={25} height={25} />
        </div>
        <div className="d-flex" style={{cursor:'pointer',}}>
          <MessagesIcon width={25} height={25} />
        </div>
      </div>
      <div className="d-flex gap-2">
        <div className="drop-shadow"
          style={{
            cursor:'pointer',
            borderRadius: "50%",
            width: "50px",
            height: "50px", overflow:'hidden',

          }}
        >
          <img src={ProfilePic}></img>
        </div>
        <div class="dropdown">
          <button
            class="btn  dropdown-toggle d-flex flex-row gap-1 justify-content-center align-content-center align-items-center"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div className="d-none d-md-block">Admirra John</div>
            <i style={{overflow:'hidden', marginTop:'10px'}} ><ArrowDropDownIcon width={20} height={20}/></i>
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">
              Settings
            </a>
            <a class="dropdown-item" href="#">
              Change Password
            </a>
            <a class="dropdown-item" href="#">
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;

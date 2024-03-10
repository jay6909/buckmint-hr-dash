import React, { useState, useContext } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import DashBoard from "./components/DashBoard";
import Modal from "./context/ModalContext";
import ScheduleModal from "./components/Modals/ScheduleModal";
import Data from "./context/MemberDataContext";
import SideBarNav from "./components/SideBar/SideBar";
import AddedData from "./context/AddedMemberContext";
import DropDown from "./context/DropDownMemberContext";

function App() {
  return (
    <Modal>
      <Data>
        <AddedData> 
        <DropDown >

                 <div className="d-flex flex-row">
          <div className="w-auto" style={{ width: "20%", height: 'auto' }}>
          <SideBarNav  />

          </div>
          <div className="container-fluid w-auto" style={{width:'80%'}}>
           <NavBar />
            <DashBoard />
          </div>
          <ScheduleModal />
        </div>
        </DropDown>
        </AddedData>

      </Data>
   </Modal>
  );
}

export default App;

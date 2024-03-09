import React, { useState, useContext } from "react";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import NavBar from "./components/NavBar/NavBar";
import DashBoard from "./components/DashBoard";
import Modal from "./context/ModalContext";
import ScheduleModal from "./components/Modals/ScheduleModal";

function App() {

  return (
    <Modal>

    <div className="d-flex flex-row">
      <SideBar />
      <div>
        <NavBar />
          <DashBoard />
         
      </div>
      <ScheduleModal/>
    </div>
    </Modal>


  );
}

export default App;

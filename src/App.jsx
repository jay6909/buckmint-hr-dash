import { useState } from 'react'
import './App.css'
import SideBar from './components/SideBar'
import NavBar from './components/NavBar'
import DashBoard from './components/DashBoard'
function App() {

  return (
    <div className='d-flex flex-row'>
      <SideBar/>
<div>      <NavBar/>
        <DashBoard/></div>
    </div>
  )
}

export default App

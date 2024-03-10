import React, { useContext } from 'react'
import UpcomingSchedule from './UpcomingSchedule'
import { useModal } from '../../context/ModalContext'

function Schedule({Recent}) {  
  const {isOpen,setModalState}=useModal()
  const handleModalOpen=(e)=>{
    setModalState(true)
    
  }
 
  return (
    <div className="d-flex flex-column flex-md-row flex-lg-column gap-3 align-items-center" style={{ padding:"25px", borderRadius:'15px'}}>
   
      <div style={{ height:'350px', width:'400px', justifyContent: 'center', alignItems: 'center',padding: '20px'}} className="d-flex flex-column">
        <div  className="d-flex align-items-center" style={{background:'#1B204A', borderRadius:'8px 8px 0px 0px', width:'100%', height:'20%'}}>
          <div className='poppins-medium p-2  mx-3 text-white ' ><div style={{fontSize:'18px', textAlign:'left'}}>
          Recent Activity</div></div>
        </div>
        <div className='d-flex flex-column justify-content-around' style={{background:'rgba(22, 30, 84, 1)', borderRadius:'0px 0px 8px 8px', color:'white', height:'80%'}}>
          <div className='m-1 p-2 text-start d-flex flex-column gap-1'>
            <div className='roboto-medium' style={{fontSize:'10px', color:'rgba(255, 255, 255, 1)'}}>10:40AM, Fri 10 Sept 2021</div>
            <div className='poppins-medium'>You Posted a New Job</div>
            <div className='roboto-regular'>Kindly check the requirements and terms of work and make sure everything is right.</div>
          </div>
          <div className='d-flex flex-row justify-content-around text-center align-items-center'>
            <div className='poppins-regular' style={{fontSize:'14px'}}>Schedule a call</div>
            <div>
            <button className="poppins-medium" style={{border:'none',borderRadius:'5px', background:'var(--css-primary)', width:'150px', height:'40px'}} onClick={handleModalOpen}>Schedule</button>
              </div>
          </div>
        </div>
      </div>
      <div><UpcomingSchedule/></div>
    </div>  
  )
}

export default Schedule
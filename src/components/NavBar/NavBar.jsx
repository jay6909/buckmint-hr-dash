import React from 'react'
import SearchBox from '../SearchBox'
import NotifsPanel from '../NotifsPanel'
import './Navbar.css'
function NavBar() {
  return (
    <div className="bg-white searchbar-container" style={{position:'fixed', display:'contents'}}>
        <div className="search-bar d-flex flex-row justify-content-between" style={{padding:"10px 15px", width:'100%'}}>
            
           <SearchBox/>
           <NotifsPanel notifications={true}/>
        </div>
        </div>
  )
}

export default NavBar
import React from 'react'
import SearchBox from './SearchBox'
import NotifsPanel from './NotifsPanel'
function NavBar() {
  return (
        <div className="search-bar d-flex flex-row justify-content-between w-100" style={{padding:"10px 15px"}}>
            
           <SearchBox/>
           <NotifsPanel notifications={true}/>
        </div>
  )
}

export default NavBar
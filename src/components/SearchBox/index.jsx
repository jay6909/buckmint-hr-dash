import React from "react";
import { useState } from "react";
import SearchIcon  from "../../assets/search-icon.svg?component";
import './Search.css'
function SearchBox() {
  const [searchText, setSearchText] = useState("");
  const [filtered, setFiltered] = useState([]);

  return (
    <div id="search-form-container" style={{ position: "relative", background:'#FAFAFA',borderRadius: "5px", border:'2px solid #E0E0E0'}}>
      <form  id="search-form" style={{ display: "flex" }}>
        <input id="search-field"
          style={{ flex: 1,  padding: "8px", background:'#FAFAFA', border:'none' }}
          placeholder="Search"
          onChange={(e) => searchResults(e.target.value)}
        />

        <button
          style={{
            width: "66px",
            textAlign:'center',
            height: "48px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border:'none',
            padding: "8px", background:'white'
          }}
        >
          <SearchIcon width={20} height={20} />
        </button>
      </form>

    </div>
  );
}

export default SearchBox;

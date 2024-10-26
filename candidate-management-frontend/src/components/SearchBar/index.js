import React from 'react';
import { FaSearch } from "react-icons/fa";
import "./index.css"

function SearchBar({ setSearch }) {
  return (
    <div className='input-search-container'>
        <FaSearch size={17} color='skyblue'/>
        <input
          className='search-input'
          type="search"
          placeholder="Search by name, phone, or email..."
          onChange={(e) => setSearch(e.target.value)}
        />
    </div>
    
  );
}

export default SearchBar;

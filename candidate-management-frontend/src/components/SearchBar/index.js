import React from 'react';
import "./index.css"

function SearchBar({ setSearch }) {
  return (
    <input
      className='search-input'
      type="search"
      placeholder="Search by name, phone, or email..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;

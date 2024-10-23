import React, { useState } from 'react';
import "./index.css"

function FilterComponent({ setFilters }) {
  const [gender, setGender] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');

  const applyFilters = () => {
    setFilters({ gender, experience, skills });
  };

  const clearFilters=()=>{
    setGender("")
    setExperience("")
    setSkills("")
    setFilters({});
  }

  return (
    <div>
      <select value={gender} className='filter-selection' onChange={(e) => setGender(e.target.value)}>
        <option value="">Filter by Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <select value={experience} className='filter-selection' onChange={(e) => setExperience(e.target.value)}>
        <option value="">Filter by Experience</option>
        <option value="1 Year">1 Year</option>
        <option value="2 Years">2 Years</option>
        <option value="3 Years">3 Years</option>
      </select>
      <input
        value={skills}
        type="text"
        placeholder="Filter by Skills"
        onChange={(e) => setSkills(e.target.value)}
        className='filter-selection'
      />
      <button className='filter-button' onClick={applyFilters}>Apply Filters</button>
      <button className='filter-button' onClick={clearFilters}>Clear Filter</button>
    </div>
  );
}

export default FilterComponent;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CandidateTable from './components/CandidateTable';
import SearchBar from './components/SearchBar';
import AddCandidateForm from './components/AddCandidateForm';
import FilterComponent from './components/FilterComponent';
import Pagination from './components/Pagination';
import "./index.css"

function App() {
  const [candidates, setCandidates] = useState([]);
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchCandidates();
    // eslint-disable-next-line 
  }, [search, filters, page]);

  const fetchCandidates = async () => {
    const params = { search, ...filters, page };
    const res = await axios.get('http://localhost:5000/api/candidates', { params });
    setCandidates(res.data.candidates);
    setTotalPages(res.data.totalPages);
  };

  return (
    <div className="App">
      <h1 className='heading'>Candidate Management</h1>
      <div className='filter-container'>
        <SearchBar setSearch={setSearch} />
        <FilterComponent setFilters={setFilters} />
      </div>
      <AddCandidateForm fetchCandidates={fetchCandidates} />
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      <CandidateTable candidates={candidates} />
      
    </div>
  );
}

export default App;


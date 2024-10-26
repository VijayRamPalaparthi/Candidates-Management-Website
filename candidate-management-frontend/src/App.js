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
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <div className='head1-container'>
        <h3>Candidate</h3>
        <button className='add-button' onClick={() => setIsModalOpen(true)}>Add</button>
      </div>
      <div className='filter-container'>
        <SearchBar setSearch={setSearch} />
        <div className='head2-container'>
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        <FilterComponent setFilters={setFilters} />
        </div>
      </div>
      
      <CandidateTable candidates={candidates} />
      {isModalOpen && (
        <AddCandidateForm 
          fetchCandidates={fetchCandidates}
          closeModal={() => setIsModalOpen(false)} // Close modal function
        />
      )}
      
    </div>
  );
}

export default App;


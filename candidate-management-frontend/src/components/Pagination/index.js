import React from 'react';
import "./index.css"

function Pagination({ page, setPage, totalPages }) {
  return (
    <div>
      <button className='pagination-button' disabled={page === 1} onClick={() => setPage(page - 1)}>
        Previous
      </button>
      <span> {page} of {totalPages} </span>
      <button className='pagination-button' disabled={page === totalPages} onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
}

export default Pagination;

import React from 'react';
import { FaRegArrowAltCircleLeft,FaRegArrowAltCircleRight } from "react-icons/fa";
import "./index.css"

function Pagination({ page, setPage, totalPages }) {
  return (
    <div className='paginate-container'>
      <span> {page}/{totalPages} </span>
      <button className='pagination-button' disabled={page === 1} onClick={() => setPage(page - 1)}>
        <FaRegArrowAltCircleLeft size={20}/>
      </button>
      
      <button className='pagination-button' disabled={page === totalPages} onClick={() => setPage(page + 1)}>
        <FaRegArrowAltCircleRight size={20}/>
      </button>
    </div>
  );
}

export default Pagination;

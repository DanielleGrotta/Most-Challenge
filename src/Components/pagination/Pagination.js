import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Axios from 'axios';
import './pagination.css'


function Pagination({ props }) {

  const [empresasList, setEmpresas] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    async function fetchData() {
      await Axios.get(`http://localhost:3001/api/get/users/count`).then((response)=>{ 
        setEmpresas(response.data)
      });
    }
    fetchData();
  },[]);
  const handlePageClick = (e) => {
    setOffset(e.selected);
  }
  
  


  return (
    <>
    <div className="pag">
      <ReactPaginate
        breakLabel="..."
        nextLabel={props.setOffset(prevOffset => prevOffset + 1)}
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={3}
        previousLabel="< "
        renderOnZeroPageCount={null}
      />
    </div>
    </>
  );
}

export default Pagination;
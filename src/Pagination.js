import React from 'react'
import { useState,useEffect } from 'react';
import ReactPaginate from "react-paginate";

const Pagination = () => {
    const [page, setPage] = useState(1);
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [currentImages, setCurrentImages] = useState(null);
const [pageCount, setPageCount] = useState(0);
const [imagesOffset, setImagesOffset] = useState(0);
const handlePageClick = (event) => {
    const newOffset = (event.selected * 8) % images.length;
    setImagesOffset(newOffset);
  };

useEffect(() => {
    const endOffset = imagesOffset + 8;
    setCurrentImages(images.slice(imagesOffset, endOffset));
    setPageCount(Math.ceil(images.length / 8));
  }, [images, imagesOffset]);
  

  return (
    <>
    <div className="pagination">
  {isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
     <button
        disabled={page === 1}
        onClick={() => setPage((prevState) => prevState - 1)}
      >
        Prev
      </button>
      <p>{page}</p>
     <button onClick={() => setPage((prevState) => prevState + 1)}>
        Next
      </button>
    </>
  )}

{/* <ReactPaginate
    breakLabel="..."
    nextLabel="next >"
    onPageChange={handlePageClick}
    pageRangeDisplayed={5}
    pageCount={pageCount}
    previousLabel="< previous"
    renderOnZeroPageCount={null}
    breakClassName={"page-item"}
    breakLinkClassName={"page-link"}
    containerClassName={"pagination"}
    pageClassName={"page-item"}
    pageLinkClassName={"page-link"}
    previousClassName={"page-item"}
    previousLinkClassName={"page-link"}
    nextClassName={"page-item"}
    nextLinkClassName={"page-link"}
    activeClassName={"active"}
  /> */}

</div>
    </>
  )
}

export default Pagination
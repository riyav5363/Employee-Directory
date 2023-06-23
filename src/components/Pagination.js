import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePrevPage = () => {
    if (!isFirstPage) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (!isLastPage) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center mt-9">
      <button
        className={`mr-2 ${
          isFirstPage ? 'opacity-50 cursor-not-allowed' : ''
        } bg-black hover:bg-black text-white font-bold py-2 px-4 rounded-l`}
        onClick={handlePrevPage}
        disabled={isFirstPage}
      >
        Previous
      </button>
      <button
        className={`${
          isLastPage ? 'opacity-50 cursor-not-allowed' : ''
        } bg-black hover:bg-black text-white font-bold py-2 px-4 rounded-r`}
        onClick={handleNextPage}
        disabled={isLastPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

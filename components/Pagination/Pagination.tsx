import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; 
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  return (
    <div className="flex items-center justify-center space-x-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="cursor-pointer"
      >
        <FaArrowLeft />
      </button>

      <span>{currentPage}</span>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="cursor-pointer"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
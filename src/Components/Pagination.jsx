import React from 'react';
import '../Styles/Pagination.css';

const Pagination = ({ currentPage, totalProducts, productsPerPage, onPageChange }) => {

    const totalPages = Math.ceil(totalProducts / productsPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };


    return (
        <div className='pagination'>
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                previous
            </button>

            <span>Page {currentPage} of {totalPages}</span>


            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                Next
            </button>
        </div>
    );
};

export default Pagination
import React from 'react';
import '../Styles/SearchBar.css';

const SearchBar = ({ onSearch }) => {

    const handleChange = (e) => {
        onSearch(e.target.value);
    }
    return (
        <div>
            <input type='text' placeholder='Search' onChange={handleChange} />
        </div>
    );
};

export default SearchBar
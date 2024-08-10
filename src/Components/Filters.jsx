import React from 'react';
import '../Styles/Filters.css';

const Filters = ({ onPriceChange, onPopularityChange, onSortChange, onRemoveFilters, selectedSort, selectedPriceRange, selectedPopularityRange }) => {

    const handlePriceChange = (e) => {
        const value = e.target.value.split('-').map(Number);
        onPriceChange(value);
    }

    const handlePopularityChange = (e) => {
        const value = e.target.value.split('-').map(Number);
        onPopularityChange(value);
    }

    const handleSortChange = (e) => {
        onSortChange(e.target.value);
    }



    return (
        <div className='filter-options'>

            <select onChange={handleSortChange} value={selectedSort}>
                <option value="" disabled>Sort by</option>
                <option value="priceAsc">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
                <option value="popularityAsc">Popularity: Low to High</option>
                <option value="popularityDesc">Popularity: High to Low</option>
            </select>
            <select onChange={handlePriceChange} value={selectedPriceRange[0] === 0 && selectedPriceRange[1] === Infinity ? "" : selectedPriceRange.join('-')}>
                <option value="" disabled>Sort by price</option>
                <option value="0-5000">0-5,000</option>
                <option value="5000-10000">5,000-10,000</option>
                <option value="10000-15000">10,000-15,000</option>
                <option value="15000-20000">15,000-20,000</option>
                <option value="20000-Infinity">more than 20,000</option>
            </select>
            <select onChange={handlePopularityChange} value={selectedPopularityRange[0] === 0 && selectedPopularityRange[1] === Infinity ? "" : selectedPopularityRange.join('-')}>
                <option value="" disabled>Sort by popularity</option>
                <option value="0-5000">0-5,000</option>
                <option value="5000-10000">5,000-10,000</option>
                <option value="10000-15000">10,000-15,000</option>
                <option value="15000-20000">15,000-20,000</option>
                <option value="20000-Infinity">more than 20,000</option>
            </select>

            <button onClick={onRemoveFilters}>Clear</button>

        </div>
    )
}

export default Filters
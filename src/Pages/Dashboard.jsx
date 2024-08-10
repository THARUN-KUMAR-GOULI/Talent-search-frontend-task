import React, { useState } from 'react';
import Filters from '../Components/Filters';
import Pagination from '../Components/Pagination';
import ProductList from '../Components/ProductList';
import SearchBar from '../Components/SearchBar';
import useFetchProducts from '../Hooks/FetchProducts';
import '../Styles/Dashboard.css';

function Dashboard() {
    const { products, error } = useFetchProducts();
    const [searchTerm, setSearchTerm] = useState('');
    const [priceRange, setPriceRange] = useState([0, Infinity]);
    const [popularityRange, setPopularityRange] = useState([0, Infinity]);
    const [sortOption, setSortOption] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 20;

    if (error) return <div>Error fetching data: {error.message}</div>;

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1] &&
        product.popularity >= popularityRange[0] &&
        product.popularity <= popularityRange[1]
    )
        .sort((a, b) => {
            if (sortOption === 'priceAsc') return a.price - b.price;
            if (sortOption === 'priceDesc') return b.price - a.price;
            if (sortOption === 'popularityAsc') return a.popularity - b.popularity;
            if (sortOption === 'popularityDesc') return b.popularity - a.popularity;
            return 0;
        });

    const paginatedProducts = filteredProducts.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
    );

    const handleRemoveFilters = () => {
        setPriceRange([0, Infinity]);
        setPopularityRange([0, Infinity]);
        setSortOption('');
        setSearchTerm('');
        setCurrentPage(1);
    };

    return (
        <div className='container'>
            <div className='search-filter'>
                <SearchBar onSearch={setSearchTerm} />

                <Filters onSortChange={setSortOption} onPriceChange={setPriceRange} onPopularityChange={setPopularityRange}
                    onRemoveFilters={handleRemoveFilters}
                    selectedSort={sortOption}
                    selectedPriceRange={priceRange}
                    selectedPopularityRange={popularityRange} />
            </div>

            <ProductList products={paginatedProducts} />
            <Pagination
                currentPage={currentPage}
                totalProducts={filteredProducts.length}
                productsPerPage={productsPerPage}
                onPageChange={setCurrentPage}
            />
        </div>
    );
}

export default Dashboard;

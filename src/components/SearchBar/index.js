import React, { useState } from 'react';
import './style.css'; // Import custom CSS for SearchField

const SearchField = ({ data, onSearch }) => {
    const [query, setQuery] = useState('');
    const [searchType, setSearchType] = useState('name'); // Default search type

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearchTypeChange = (e) => {
        setSearchType(e.target.value);
    };

    const handleSearch = () => {
        // Perform search logic here
        const filteredData = data.filter(item => {
            if (searchType === 'name') {
                return item.name.toLowerCase().includes(query.toLowerCase());
            } else if (searchType === 'tags') {
                return item.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()));
            }
            return true; // Default to returning all items if searchType is not recognized
        });
        onSearch(filteredData);
    };

    return (
        <div className="search-container">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                className="search-input"
                placeholder="Search..."
            />
            <button onClick={handleSearch} className="search-button">Search</button>
        </div>
    );
};

export default SearchField;

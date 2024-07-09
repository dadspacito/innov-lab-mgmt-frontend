import React, { useState } from 'react';
import './style.css'; // Import custom CSS for SearchField

const SearchField = ({ onSearch, onTypeChange }) => {
    const [query, setQuery] = useState('');
    const [searchType, setSearchType] = useState('name'); // Default search type

    const handleInputChange = (e) => {
      setQuery(e.target.value); // Update query state
      onSearch(e.target.value); // Call parent component's search function
  };

  const handleSearchTypeChange = (e) => {
    setSearchType(e.target.value); // Update search type state
    onTypeChange(e.target.value); // Call parent component's type change function
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
            <select value={searchType} onChange={handleSearchTypeChange} className="search-selector">
                <option value="name">Search by Name</option>
                <option value="tags">Search by Tags</option>
            </select>
            {/* <button onClick={handleSearch} className="search-button">Search</button> */}
        </div>
    );
};

export default SearchField;

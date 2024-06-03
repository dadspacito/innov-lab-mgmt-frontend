import React, { useState } from 'react';

const SearchField = ({ data, onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    // Perform search logic here
    const filteredData = data.filter(item => {
        // Check if any tag in the project matches the query
        return item.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()));
    });
    onSearch(filteredData);
};

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchField;

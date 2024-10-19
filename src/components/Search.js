import React from 'react';

const Search = ({ setSearchTerm }) => {
  return (
    <input 
      type="text" 
      placeholder="Search for a book..." 
      onChange={(e) => setSearchTerm(e.target.value)} 
    />
  );
};

export default Search;

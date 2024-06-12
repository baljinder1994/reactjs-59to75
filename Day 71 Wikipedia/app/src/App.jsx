// src/App.js

import React, { useState }  from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import fetchW from './wikiService';
function App() {
const[results,setResults]=useState([]);

const handleSearch = async (query) => {
  const data=await fetchW(query);
  setResults(data)
}
  

  return (
    <div>
    <h1>Wikipedia Clone</h1>
      <SearchBar onSearch={handleSearch}/>
      <SearchResults results={results}/>
    </div>
  );
}

export default App;
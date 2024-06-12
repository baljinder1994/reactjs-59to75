// src/App.js
import React, { useState } from 'react';
import News from './News'

function App() {
  const[category,setCategory]=useState('general')
  const handleCategory=(e)=>{
    setCategory(e.target.value)
  }

  return (
   <div className='App'>
     <header className='App-header'>
      <h1>News App</h1>
      <select onChange={handleCategory} value={category}>
        <option value="general">General</option>
        <option value="business">Business</option>
        <option value="entertainment">Entertainment</option>
        <option value="health">Health</option>
        <option value="science">Science</option>
        <option value="sports">Sports</option>
        <option value="tech">Tech</option>
      </select>
     </header>
     <News category={category}/>
   </div>
  );
}

export default App;

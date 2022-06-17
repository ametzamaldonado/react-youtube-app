import React, { useState, useEffect } from 'react';
import './Search.css'


export default function Search({ setSearch }) {
  const [ title, setTitle ] = useState('');

  // function sets <input> "value" to the value entered!
  const onSearchChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
  }

  // Once the value is SUMBITTED, we submit the value to our setSearch state in order to get the videos through our useEffect()
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(title);
    setSearch(title);
    console.log(title)
    setTitle('');
  };

  return (
    <div className="search-component">
      <br/>
      <form className='search-form'onSubmit={onSubmit}>
        <div className="form-controls">
          <input 
          onChange={onSearchChange} 
          id='video-search'
          value={title} 
          type='text' 
          placeholder='Enter Search Keyword'/>
          <button id="search-button">Search</button>
        </div>
      </form>
    </div>
  )
}



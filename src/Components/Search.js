import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.css'


function Search({ setSearch }) {
  const [ title, setTitle ] = useState('');
  const navigate = useNavigate();

  // function sets <input> "value" to the value entered!
  const onSearchChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
  }

  // Once the value is SUMBITTED, we submit the value to our setSearch state in order to get the videos through our useEffect()
  const onSubmit = (e) => {
    e.preventDefault();
    // setCount(10);
    setSearch(title);
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
          <button id="search-button" onClick={() => navigate("/videos")}>Search</button>
        </div>
      </form>
    </div>
  )
}

export default Search;

import React from 'react';
import { Link } from "react-router-dom";
import Search from "../Components/Search";
import './Nav.css';
import Home from '../PNG/home-icon.png';
import About from '../PNG/about-icon.png'

function Nav(props) {
  const { setSearch, setCount } = props
  return (
    <>
      <Link to='/'>
        <img
          src="https://1000logos.net/wp-content/uploads/2017/05/Color-YouTube-logo.jpg"
          alt='youtube-logo'
          className="yt-logo" />
      </Link>
      <Search setSearch={setSearch} setCount={setCount} />
      <div className='other-logos'>
        <Link to="/">
          <img
            src={Home}
            alt='home-logo'
            className="home-logo" />
        </Link>
        <Link to="/about">
          <img
            src={About}
            alt='about-us-logo'
            className="about-logo" />
        </Link>
      </div>
    </>
  );
}

export default Nav
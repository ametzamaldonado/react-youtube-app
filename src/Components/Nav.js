import React from 'react';
// import { Link } from "react-router-dom";
import Search from "./Search";
import './Nav.css'
import { Route } from "react-router-dom";

function Nav(props) {
  const { setSearch } = props
  return (
    <>
      <img
        src="https://1000logos.net/wp-content/uploads/2017/05/Color-YouTube-logo.jpg"
        alt='youtube-logo'
        className="yt-logo" />
      <Search setSearch={setSearch} />
      <div className='other-logos'>
        <img
          src=""
          alt='youtube-logo'
          className="home-logo" />
        <img
          src="https://www.iconsdb.com/icons/preview/white/home-7-xxl.png"
          alt='about-us-logo'
          className="about-logo" />
      </div>
    </>
  );
}

export default Nav
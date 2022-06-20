import React from 'react';
import './About.css';  
// KM!

export default function About() {
  return (
    <>
      <div className='about-section'>
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
      </div>

      <h2>Our Team</h2>
      <div className='row' >
        <div className='column'>
          <div className='card'>
            {/* <img src='' /> */}
            <div className='container'>
              <h2>Ametza Maldonado</h2>
              <p className='title'>CEO & Founder</p>
              <p>Some text that describes her lorem ipsum ipsum lorem</p>
              <p>ametzamaldonado@pursuit.org</p>
              <p><button className='button'>Contact</button></p >
            </div >
          </div >
        </div >
      </div >

      <div className='row'>
        <div className='column'>
          <div className='card'>
            {/* <img src='' /> */}
            <div className='container'>
              <h2>Victor Lopez</h2>
              <p className='title'>CEO & Founder</p>
              <p>Some text that describes her lorem ipsum ipsum lorem</p>
              <p>victorlopez@pursuit.org</p>
              <p><button className='button'>Contact</button></p >
            </div >
          </div >
        </div >
      </div >

      <div className='row'>
        <div className='column'>
          <div className='card'>
            {/* <img src='' /> */}
            <div className='container'>
              <h2>Kenya Mighty</h2>
              <p className='title'>CEO & Founder</p>
              <p>Some text that describes her lorem ipsum ipsum lorem</p>
              <p>kenyamighty@pursuit.org</p>
              <p><button className='button'>Contact</button></p >
            </div >
          </div >
        </div >
      </div >
    </>
  );
}

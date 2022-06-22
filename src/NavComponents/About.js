import React from 'react';
import './About.css';
import Kenya from '../PNG/KenyaMighty.jpeg';
import Ametza from '../PNG/AmetzaMaldonado.jpeg';
import Victor from '../PNG/VictorLopez.jpeg';
// KM!

export default function About() {
  return (
    <>
      <div className='about-section'>
        <h1>About Us Page</h1>
        <p>
          Hey Everyone! We are Team 4! ﾍ(=￣∇￣)ﾉ
          <br/>
          <br/>
          This was our collective attempt of duplicating the popular website: YouTube.
          <br/>
          None of us have any prior coding experience, but through hardwork and a lot 
          <br/>
          of brainstorming, we are proud to demonstrate to you all our youtube project!
        </p>
      </div>

      <h2>Our Team</h2>
      <div className='row' >
        <div className='column'>
          <div className='card'>
            <img src={Ametza} />
            <div className='container'>
              <h2>Ametza Maldonado</h2>
              <p className='title'>CEO & Founder</p>
              <p>As the eldest of my family here in U.S, I experienced and lived through many ‘firsts’.  After graduating from college, I still hadn't figured out what I wanted to do or where I wanted to go. I was fortunate enough to work at a small firm, but after almost 3 years, I felt lost yet again. Thats how I ended up here, at pursuit, looking to expand my horizons and change career paths. And, when I’m not going through an existential crisis, I enjoy anime, Kpop, rap and watching movies :D . </p>
              <p>
                <button className='button'>
                  <a href='mailto:ametzayinmaldonado@pursuit.org'>
                    Email Us!
                  </a>
                </button>
              </p >
              <p>
                <button className='button'>
                  <a href='https://github.com/ametzamaldonado'>
                    GitHub
                  </a>
                </button>
              </p >
            </div >
          </div >
        </div >
      </div >

      <div className='row'>
        <div className='column'>
          <div className='card'>
            <img src={Victor}/>
            <div className='container'>
              <h2>Victor Lopez</h2>
              <p className='title'>CEO & Founder</p>
              <p>My interest in cryptocurrency and blockchain technology led me to pursue a career in software engineering. Now I’m aiming to make a meaningful contribution to to the world of tech. In my free time, I enjoy hiking, boxing, and swimming.</p>
              <p>
                <button className='button'>
                  <a href='mailto:victorlopez@pursuit.org'>
                    Email Us!
                  </a>
                </button>
              </p >
              <p>
                <button className='button'>
                  <a href='https://github.com/vlopez515'>
                    GitHub
                  </a>
                </button>
              </p >
            </div >
          </div >
        </div >
      </div >

      <div className='row'>
        <div className='column'>
          <div className='card'>
            <img src={Kenya} />
            <div className='container'>
              <h2>Kenya Mighty</h2>
              <p className='title'>CEO & Founder</p>
              <p>As the founder and CEO of the local non-profit: Nest Music Conservatory, I believe in the saying my colleague mentioned about changing the world by helping one kid at a time.  My journey of learning led me to pursuit’s program in full-stack web development.  In my leisure, I love Karaoke vocal therapy and walking my dogs Coco and Chanel.</p>
              <p>
                <button className='button'>
                  <a href='mailto:kenyamighty@pursuit.org'>
                    Email Us!
                  </a>
                </button>
              </p>
              <p>
                <button className='button'>
                  <a href='https://github.com/Kenyamighty'>
                    GitHub
                  </a>
                </button>
              </p >
            </div >
          </div >
        </div >
      </div >
    </>
  );
}

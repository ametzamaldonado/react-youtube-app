import React from 'react';
import './About.css';
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
            <img src='https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff9e70505-a810-41e9-8c68-dd0877044085%2FAmetzayin_Maldonado.jpg?table=block&id=571c4765-cb24-4f07-a79c-aa6a55132d63&spaceId=e2735e9b-8fe9-4c16-bdc1-be142cd1014e&width=2000&userId=1c56301b-4ffe-419f-b2c0-5424d42c657c&cache=v2' />
            <div className='container'>
              <h2>Ametza Maldonado</h2>
              <p className='title'>CEO & Founder</p>
              <p>As the eldest of my family here in U.S, I experienced and lived through many ‘firsts’.  As the first to graduate from college, I was faced with the difficult decision of figuring out what to do and where to go from here. I was fortunate enough to be given the opportunity to work in a small firm, but after almost 3 years, I felt lost yet again. Thats how I ended up here, at pursuit, looking to expand my horizons and change career paths. But, when I’m not going through an existential crisis, I enjoy anime, Kpop, rap and watching movies. </p>
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
            <img src='https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fba207bb8-6949-469a-9ebf-f829125e24d9%2FVictor_Lopez.jpg?table=block&id=0d870e9f-7173-4de0-b2ec-9f0d57ee241c&spaceId=e2735e9b-8fe9-4c16-bdc1-be142cd1014e&width=2000&userId=1c56301b-4ffe-419f-b2c0-5424d42c657c&cache=v2'/>
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
            <img src='https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F89492e4d-b659-4b01-a4a7-db0d91442448%2FKenya_Mighty.jpg?table=block&id=4ac1cb00-8305-4e78-802b-b548eb4f129d&spaceId=e2735e9b-8fe9-4c16-bdc1-be142cd1014e&width=2000&userId=1c56301b-4ffe-419f-b2c0-5424d42c657c&cache=v2' />
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

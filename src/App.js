import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";


// Components 
import About from "./NavComponents/About";
import Home from "./NavComponents/Home";
import Nav from "./NavComponents/Nav";
import Video from "./Components/Video";
import VideosIndex from "./Components/VideosIndex";
import Modal from "./Components/Modal";


export default function App() {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(10);
  const [videos, setVideos] = useState([]);
  const [show, setShow] = useState(false)
  

    function getData() {
      return fetch(
        `https://youtube.googleapis.com/youtube/v3/search?&part=snippet&key=${process.env.REACT_APP_API_KEY}&maxResults=${count}&q=${search}`)
        .then((response) => response.json())
        .then((data) => { //
          if (data.error.code = 400) {
            setShow(true)
          }
          let videosData = data.items //<- look at data object being returned (key - items)
          setVideos(videosData);
          // console.log(videosData)
        }) .catch (() => {
          setShow(true)
        })

        

  }
  // console.log(videos)
  useEffect(() => {
    getData();
  }, [search, count]);
  console.log(videos)
  
  return (
    <div className="app">
      <div>
      <Modal  videos={videos} onClose={() => setShow(false)} show={show} />
      </div>
      <nav className="navbar">
        < Nav setSearch={setSearch} />
      </nav>
      <main >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/videos" element={< VideosIndex videos={videos} />} />
          <Route path="/videos/:vidId" element={<Video />} />
        </Routes>
      </main>
    </div>
  );
}

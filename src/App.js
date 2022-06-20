import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";


// Components 
import About from "./NavComponents/About";
import Home from "./NavComponents/Home";
import Nav from "./NavComponents/Nav";
import Video from "./Components/Video";
import VideosIndex from "./Components/VideosIndex";

export default function App() {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(10);
  const [videos, setVideos] = useState([]);

    function getData() {
      return fetch(
        `https://youtube.googleapis.com/youtube/v3/search?&part=snippet&key=${process.env.REACT_APP_API_KEY}&maxResults=${count}&q=${search}`)
        .then((response) => response.json())
        .then((data) => { //
          let videosData = data.items //<- look at data object being returned (key - items)
          setVideos(videosData);
          // console.log(videosData)
        }
    );
  }

  // console.log(videos)
  useEffect(() => {
    getData();
  }, [search, count]);

  console.log(videos)
  return (
    <div className="app">
      <nav className="navbar">
        < Nav setSearch={setSearch} />
      </nav>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/videos" element={< VideosIndex videos={videos} />} />
          <Route path="/view/:vidId" element={<Video />} />
        </Routes>
      </main>
    </div>
  );
}

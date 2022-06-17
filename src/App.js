import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";


// Components 
import About from "./Components/About";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
// import Search from "./Components/Search";
import Video from "./Components/Video";
import VideosIndex from "./Components/VideosIndex";

export default function App() {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(5);
  const [videos, setVideos] = useState([])

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


useEffect(() => {
  getData();
}, [search, count]);



return (
  <body>
    <div className="app">
    <nav className="navbar">
      < Nav setSearch={setSearch} />
    </nav> 
    {/* <div className="side-bar">
      <p>Hi Hi</p>
    </div> */}
    {/* < Search setSearch={setSearch} /> */}

    <div className="display">
    < VideosIndex videos={videos} />
    </div>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/video/:id" element={<Video />} />
    </Routes>
    </div>
  </body>
);
}

<>
<Nav />


</>
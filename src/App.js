import "./App.css";
import { React, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Search from "./Components/Search";
import Video from "./Components/Video";
import VideosIndex from "./Components/VideosIndex";

export default function App() {
  function getData() {
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`
    );
  }

  useEffect(() => {
    getData()
      .then((response) => response.json())
      .then((response) => console.log(response));
  }, []);

  return (
    <div className="wrapper">
      <Nav />
      <Search />
      <Switch>
        <Route exact path="/">
          <Home />
          <VideosIndex />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/videos:id">
          <Video />
        </Route>
      </Switch>
    </div>
  );
}

import { Link, useParams } from "react-router-dom";
import React from 'react';
import YouTube from "react-youtube";
import { useState } from "react"; 
import CommentSection from "../ComemntSection/CommentSection";

function Video(props) {
  const {setCommentArry, arrayOfComments} = props;
  let params = useParams();
  const { vidId } = params;
  console.log(vidId)
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  
  return (
    <>
      <YouTube videoId={vidId} opts={opts} />
      <br />
      <CommentSection id={vidId} setCommentArry={setCommentArry} arrayOfComments={arrayOfComments}/>
      <br />
      <Link to="/videos"><button>Go Back</button></Link>
      
    </>
  );
}
export default Video;
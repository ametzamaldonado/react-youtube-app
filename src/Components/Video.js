import React from 'react';
// import { useHistory, useParams } from 'react-router-dom';
import YouTube from 'react-youtube';


const Video = ({ videoId }) => {
  return (
    <div>
      <YouTube
        videoId={videoId}
      />
    </div>
  )
}

export default Video
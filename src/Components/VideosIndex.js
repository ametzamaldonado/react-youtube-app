import { Link } from 'react-router-dom';
// import './VideosIndex.css';

export default function VideosIndex(props) {
  const { videos } = props;
  // console.log(videos);


  return (
    <div className='videos-shown'>
      {videos.map(vid => {
        const video = vid.snippet;
        console.log(vid)
        return (
          <article className='video-results' id={vid.etag}>
            <h3>
              <Link to={`/video/${vid.etag}`}> {video.title}</Link>
            </h3>
              <img src={video.thumbnails.default.url} />
              <p>Channel: {video.channelTitle}</p>
              <p>Description: {video.description}</p>
          </article>
        )
      })}
    </div>
  )
}



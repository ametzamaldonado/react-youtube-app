import ShowVideos from "./ShowVideos";
import './VideosIndex.css'


const VideosIndex = (props) => {
  const { videos } = props;
  console.log(videos);

  return (
    <>
  <h2>All Results</h2>
    <section className='videos-shown'>
      {videos.map(vid => {
        return <ShowVideos vid={vid}/>
      })}
    </section>
    </>
  )
}

export default VideosIndex;



